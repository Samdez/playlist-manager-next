import { Playlist, SpotifyApi } from '@spotify/web-api-ts-sdk';
import { IPlaylist } from './my-playlists/page';

export function shuffleTracks(playlist: IPlaylist) {
	const shuffledPlaylist = {
		...playlist,
		tracks: {
			...playlist.tracks,
			items: [...playlist.tracks.items],
		},
	};

	for (let i = shuffledPlaylist.tracks.items.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledPlaylist.tracks.items[i], shuffledPlaylist.tracks.items[j]] = [
			shuffledPlaylist.tracks.items[j],
			shuffledPlaylist.tracks.items[i],
		];
	}
	return shuffledPlaylist;
}

export function shufflePlaylist(playlist: IPlaylist) {
	if (playlist) {
		const tracks = shuffleTracks(playlist);
		return tracks;
	}
}
export async function syncPlaylist(
	playlistId: string,
	client: SpotifyApi,
	playlist: Playlist
) {
	try {
		await client.playlists.removeItemsFromPlaylist(playlistId, {
			tracks: playlist?.tracks.items.map(t => ({ uri: t.track.uri })) || [],
		});
		await client.playlists.addItemsToPlaylist(
			playlistId,
			playlist?.tracks.items.map(t => t.track.uri) || []
		);
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}
}
