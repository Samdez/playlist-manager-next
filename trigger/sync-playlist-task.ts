import { client } from '@/app/client';
import { shufflePlaylist, syncPlaylist } from '@/app/utils';
import { schedules } from '@trigger.dev/sdk/v3';

async function shufflePlaylistTask(playlistId: string) {
	try {
		const playlist = await client.playlists.getPlaylist(playlistId);
		shufflePlaylist(playlist);
		await syncPlaylist(playlistId, client, playlist);
	} catch (error) {
		console.error(`Failed to sync playlist ${playlistId}:`, error);
		throw error; // Re-throw to let Trigger.dev handle the error
	}
}

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
