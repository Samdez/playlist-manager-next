import { client } from '@/app/client';
import { shufflePlaylist, syncPlaylist } from '@/app/utils';
import { schedules } from '@trigger.dev/sdk/v3';

async function shufflePlaylistTask(playlistId: string) {
	const playlist = await client.playlists.getPlaylist(playlistId);
	shufflePlaylist(playlist);
	syncPlaylist(playlistId, client, playlist);
}

export const syncPlaylistEveryMinuteTask = schedules.task({
	id: 'sync-playlist-every-minute-task',
	cron: '* * * * *',
	run: async payload => {
		if (!payload.externalId) {
			throw new Error('Playlist ID is required');
		}
		shufflePlaylistTask(payload.externalId);
	},
});

export const syncPlaylistEveryHourTask = schedules.task({
	id: 'sync-playlist-every-hour-task',
	cron: '0 * * * *',
	run: async payload => {
		if (!payload.externalId) {
			throw new Error('Playlist ID is required');
		}
		shufflePlaylistTask(payload.externalId);
	},
});
export const syncPlaylistEveryDayTask = schedules.task({
	id: 'sync-playlist-every-day-task',
	cron: '0 0 * * *',
	run: async payload => {
		if (!payload.externalId) {
			throw new Error('Playlist ID is required');
		}
		shufflePlaylistTask(payload.externalId);
	},
});
export const syncPlaylistEveryWeekTask = schedules.task({
	id: 'sync-playlist-every-week-task',
	cron: '0 0 * * 1',
	run: async payload => {
		if (!payload.externalId) {
			throw new Error('Playlist ID is required');
		}
		shufflePlaylistTask(payload.externalId);
	},
});
