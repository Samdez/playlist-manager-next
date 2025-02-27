import { schedules } from '@trigger.dev/sdk/v3';
import { shufflePlaylist } from '@/app/utils';
import { SpotifyPlaylistAPI } from '@/app/custom-client';

async function shufflePlaylistTask(playlistId: string) {
	try {
		const customClient = new SpotifyPlaylistAPI(
			process.env.SPOTIFY_CLIENT_ID!,
			process.env.SPOTIFY_CLIENT_SECRET!
		);
		const playlist = await customClient.getPlaylist(playlistId);
		shufflePlaylist(playlist);
		await customClient.removeItemsFromPlaylist(
			playlistId,
			playlist.tracks.items.map(t => ({ uri: t.track.uri })) || []
		);
		await customClient.addItemsToPlaylist(
			playlistId,
			playlist?.tracks.items.map(t => t.track.uri) || []
		);
		// await syncPlaylist(playlistId, spotifyClient, playlist);
	} catch (error) {
		console.error(`Failed to sync playlist ${playlistId}:`, error);
		throw error;
	}
}

// ... existing code ...

// async function shufflePlaylistTask(playlistId: string) {
// 	try {
// 		const serverSideClient = SpotifyApi.withClientCredentials(
// 			process.env.SPOTIFY_CLIENT_ID!,
// 			process.env.SPOTIFY_CLIENT_SECRET!
// 		);
// 		const playlist = await serverSideClient.playlists.getPlaylist(playlistId);
// 		shufflePlaylist(playlist);
// 		await syncPlaylist(playlistId, serverSideClient, playlist);
// 	} catch (error) {
// 		console.error(`Failed to sync playlist ${playlistId}:`, error);
// 		throw error; // Re-throw to let Trigger.dev handle the error
// 	}
// }

const createSyncTask = (id: string) => {
	return schedules.task({
		id,
		retry: {
			maxAttempts: 3,
		},
		run: async payload => {
			if (!payload.externalId) {
				throw new Error('Playlist ID is required: createSyncTask');
			}
			await shufflePlaylistTask(payload.externalId);
		},
	});
};

export const syncPlaylistEveryMinuteTask = createSyncTask(
	'sync-playlist-every-minute-task'
);

export const syncPlaylistEveryHourTask = createSyncTask(
	'sync-playlist-every-hour-task'
);

export const syncPlaylistEveryDayTask = createSyncTask(
	'sync-playlist-every-day-task'
);

export const syncPlaylistEveryWeekTask = createSyncTask(
	'sync-playlist-every-week-task'
);
