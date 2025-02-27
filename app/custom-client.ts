/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Spotify Playlist API Client
 * Uses client credentials flow for server-side authentication
 * Provides methods for working with playlists
 */
import type {
	Playlist,
	Page,
	FeaturedPlaylists,
	SimplifiedPlaylist,
} from '@spotify/web-api-ts-sdk';

export class SpotifyPlaylistAPI {
	private clientId: string;
	private clientSecret: string;
	private accessToken: string | null = null;
	private tokenExpirationTime: number = 0;
	private baseUrl: string = 'https://api.spotify.com/v1';

	/**
	 * Create a new SpotifyPlaylistAPI instance
	 * @param clientId Your Spotify application client ID
	 * @param clientSecret Your Spotify application client secret
	 */
	constructor(clientId: string, clientSecret: string) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
	}

	/**
	 * Authenticate with Spotify using client credentials flow
	 * @returns {Promise<void>}
	 */
	private async authenticate(): Promise<void> {
		const now = Date.now();

		// Return if we already have a valid token
		if (this.accessToken && now < this.tokenExpirationTime) {
			return;
		}

		const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString(
			'base64'
		);

		try {
			const response = await fetch('https://accounts.spotify.com/api/token', {
				method: 'POST',
				headers: {
					Authorization: `Basic ${auth}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					grant_type: 'client_credentials',
				}).toString(),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			this.accessToken = data.access_token;
			// Set expiration time with a small buffer (5 seconds)
			this.tokenExpirationTime = now + data.expires_in * 1000 - 5000;
		} catch (error) {
			console.error('Failed to authenticate with Spotify:', error);
			throw new Error('Authentication failed');
		}
	}

	/**
	 * Make an authenticated request to Spotify API
	 * @param method HTTP method
	 * @param endpoint API endpoint (without base URL)
	 * @param params URL parameters
	 * @param body Request body data
	 * @returns {Promise<T>} Response data
	 */
	private async request<T>(
		method: 'GET' | 'POST' | 'PUT' | 'DELETE',
		endpoint: string,
		params: Record<string, string | number | undefined> = {},
		body: Record<string, unknown> | null = null
	): Promise<T> {
		await this.authenticate();

		// Build URL with query parameters
		const url = new URL(`${this.baseUrl}${endpoint}`);
		Object.entries(params).forEach(([key, value]) => {
			if (value !== undefined) {
				url.searchParams.append(key, String(value));
			}
		});

		try {
			const options: RequestInit = {
				method,
				headers: {
					Authorization: `Bearer ${this.accessToken}`,
					'Content-Type': 'application/json',
				},
			};

			if (body && (method === 'POST' || method === 'PUT')) {
				options.body = JSON.stringify(body);
			}

			const response = await fetch(url.toString(), options);

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(
					`Spotify API error: ${response.status} ${response.statusText} - ${errorText}`
				);
			}

			// Some endpoints return 204 No Content
			if (response.status === 204) {
				return null as unknown as T;
			}

			return await response.json();
		} catch (error) {
			console.error(
				`Spotify API request failed (${method} ${endpoint}):`,
				error
			);
			throw error;
		}
	}

	/**
	 * Get a playlist by ID
	 * @param playlistId Spotify playlist ID
	 * @param fields Comma-separated list of fields to return
	 * @returns {Promise<Playlist>} Playlist data
	 */
	async getPlaylist(playlistId: string, fields?: string): Promise<Playlist> {
		return this.request<Playlist>(
			'GET',
			`/playlists/${playlistId}`,
			fields ? { fields } : {}
		);
	}

	/**
	 * Get tracks from a playlist
	 * @param playlistId Spotify playlist ID
	 * @param limit Maximum number of tracks to return (default: 100, max: 100)
	 * @param offset Index of the first track to return (default: 0)
	 * @param fields Comma-separated list of fields to return
	 * @returns {Promise<Page<PlaylistTrack>>} Playlist tracks data
	 */
	async getPlaylistTracks(
		playlistId: string,
		limit: number = 100,
		offset: number = 0,
		fields?: string
	): Promise<any> {
		const params: Record<string, string | number | undefined> = {
			limit,
			offset,
		};
		if (fields) params.fields = fields;

		return this.request<any>('GET', `/playlists/${playlistId}/tracks`, params);
	}

	/**
	 * Get all tracks from a playlist (handles pagination automatically)
	 * @param playlistId Spotify playlist ID
	 * @param fields Comma-separated list of fields to return
	 * @returns {Promise<PlaylistTrack[]>} Array of all playlist tracks
	 */
	async getAllPlaylistTracks(
		playlistId: string,
		fields?: string
	): Promise<any> {
		let allTracks: any[] = [];
		let offset = 0;
		const limit = 100;

		let response = await this.getPlaylistTracks(
			playlistId,
			limit,
			offset,
			fields
		);
		allTracks = allTracks.concat(response.items);

		while (response.next) {
			offset += limit;
			response = await this.getPlaylistTracks(
				playlistId,
				limit,
				offset,
				fields
			);
			allTracks = allTracks.concat(response.items);
		}

		return allTracks;
	}

	/**
	 * Search for playlists
	 * @param query Search query
	 * @param limit Maximum number of results (default: 20, max: 50)
	 * @param offset Index of the first result to return (default: 0)
	 * @returns {Promise<SearchResults>} Search results
	 */
	async searchPlaylists(
		query: string,
		limit: number = 20,
		offset: number = 0
	): Promise<any> {
		return this.request<any>('GET', '/search', {
			q: query,
			type: 'playlist',
			limit,
			offset,
		});
	}

	/**
	 * Get featured playlists
	 * @param limit Maximum number of playlists (default: 20, max: 50)
	 * @param offset Index of the first playlist to return (default: 0)
	 * @param country Country code (ISO 3166-1 alpha-2)
	 * @param locale Locale code (such as 'en_US')
	 * @returns {Promise<FeaturedPlaylists>} Featured playlists
	 */
	async getFeaturedPlaylists(
		limit: number = 20,
		offset: number = 0,
		country?: string,
		locale?: string
	): Promise<FeaturedPlaylists> {
		const params: Record<string, string | number | undefined> = {
			limit,
			offset,
		};
		if (country) params.country = country;
		if (locale) params.locale = locale;

		return this.request<FeaturedPlaylists>(
			'GET',
			'/browse/featured-playlists',
			params
		);
	}

	/**
	 * Get a user's playlists
	 * @param userId Spotify user ID
	 * @param limit Maximum number of playlists (default: 20, max: 50)
	 * @param offset Index of the first playlist to return (default: 0)
	 * @returns {Promise<Page<SimplifiedPlaylist>>} User's playlists
	 */
	async getUserPlaylists(
		userId: string,
		limit: number = 20,
		offset: number = 0
	): Promise<Page<SimplifiedPlaylist>> {
		return this.request<Page<SimplifiedPlaylist>>(
			'GET',
			`/users/${userId}/playlists`,
			{ limit, offset }
		);
	}

	/**
	 * Get category playlists
	 * @param categoryId Spotify category ID
	 * @param limit Maximum number of playlists (default: 20, max: 50)
	 * @param offset Index of the first playlist to return (default: 0)
	 * @param country Country code (ISO 3166-1 alpha-2)
	 * @returns {Promise<Page<SimplifiedPlaylist>>} Category playlists
	 */
	async getCategoryPlaylists(
		categoryId: string,
		limit: number = 20,
		offset: number = 0,
		country?: string
	): Promise<Page<SimplifiedPlaylist>> {
		const params: Record<string, string | number | undefined> = {
			limit,
			offset,
		};
		if (country) params.country = country;

		return this.request<Page<SimplifiedPlaylist>>(
			'GET',
			`/browse/categories/${categoryId}/playlists`,
			params
		);
	}

	/**
	 * Check if a user follows a playlist
	 * @param playlistId Spotify playlist ID
	 * @param userIds Array of Spotify user IDs
	 * @returns {Promise<boolean[]>} Array of booleans indicating if each user follows the playlist
	 */
	async checkUsersFollowPlaylist(
		playlistId: string,
		userIds: string[]
	): Promise<boolean[]> {
		return this.request('GET', `/playlists/${playlistId}/followers/contains`, {
			ids: userIds.join(','),
		});
	}

	/**
	 * Update a playlist's details
	 * @param playlistId Spotify playlist ID
	 * @param options Playlist update options
	 * @returns {Promise<void>}
	 */
	async updatePlaylist(
		playlistId: string,
		options: {
			name?: string;
			description?: string;
			public?: boolean;
			collaborative?: boolean;
		}
	): Promise<void> {
		return this.request('PUT', `/playlists/${playlistId}`, {}, options);
	}

	/**
	 * Add items to a playlist
	 * @param playlistId Spotify playlist ID
	 * @param uris Array of Spotify URIs (tracks or episodes)
	 * @param position Position to insert the items (optional)
	 * @returns {Promise<{ snapshot_id: string }>} Object containing the snapshot ID
	 */
	async addItemsToPlaylist(
		playlistId: string,
		uris: string[],
		position?: number
	): Promise<{ snapshot_id: string }> {
		const body: { uris: string[]; position?: number } = { uris };

		if (position !== undefined) {
			body.position = position;
		}

		return this.request('POST', `/playlists/${playlistId}/tracks`, {}, body);
	}

	/**
	 * Remove items from a playlist
	 * @param playlistId Spotify playlist ID
	 * @param tracks Array of objects containing track URIs to remove
	 * @param snapshotId Playlist's snapshot ID (optional)
	 * @returns {Promise<{ snapshot_id: string }>} Object containing the new snapshot ID
	 */
	async removeItemsFromPlaylist(
		playlistId: string,
		tracks: Array<{ uri: string }>,
		snapshotId?: string
	): Promise<{ snapshot_id: string }> {
		const body: { tracks: Array<{ uri: string }>; snapshot_id?: string } = {
			tracks,
		};

		if (snapshotId) {
			body.snapshot_id = snapshotId;
		}

		return this.request('DELETE', `/playlists/${playlistId}/tracks`, {}, body);
	}

	/**
	 * Remove specific occurrences of items from a playlist
	 * @param playlistId Spotify playlist ID
	 * @param tracks Array of objects containing track URIs and positions to remove
	 * @param snapshotId Playlist's snapshot ID (optional)
	 * @returns {Promise<{ snapshot_id: string }>} Object containing the new snapshot ID
	 */
	async removeSpecificOccurrencesFromPlaylist(
		playlistId: string,
		tracks: Array<{ uri: string; positions: number[] }>,
		snapshotId?: string
	): Promise<{ snapshot_id: string }> {
		const body: {
			tracks: Array<{ uri: string; positions: number[] }>;
			snapshot_id?: string;
		} = { tracks };

		if (snapshotId) {
			body.snapshot_id = snapshotId;
		}

		return this.request('DELETE', `/playlists/${playlistId}/tracks`, {}, body);
	}

	/**
	 * Replace all items in a playlist
	 * @param playlistId Spotify playlist ID
	 * @param uris Array of Spotify URIs (tracks or episodes)
	 * @returns {Promise<void>}
	 */
	async replacePlaylistItems(
		playlistId: string,
		uris: string[]
	): Promise<void> {
		return this.request('PUT', `/playlists/${playlistId}/tracks`, {}, { uris });
	}

	/**
	 * Reorder items in a playlist
	 * @param playlistId Spotify playlist ID
	 * @param rangeStart Position of the first item to be reordered
	 * @param insertBefore Position where the items should be inserted
	 * @param options Additional options
	 * @returns {Promise<{ snapshot_id: string }>} Object containing the new snapshot ID
	 */
	async reorderPlaylistItems(
		playlistId: string,
		rangeStart: number,
		insertBefore: number,
		options?: {
			rangeLength?: number;
			snapshotId?: string;
		}
	): Promise<{ snapshot_id: string }> {
		const body: {
			range_start: number;
			insert_before: number;
			range_length?: number;
			snapshot_id?: string;
		} = {
			range_start: rangeStart,
			insert_before: insertBefore,
		};

		if (options?.rangeLength !== undefined) {
			body.range_length = options.rangeLength;
		}

		if (options?.snapshotId) {
			body.snapshot_id = options.snapshotId;
		}

		return this.request('PUT', `/playlists/${playlistId}/tracks`, {}, body);
	}
}
