import { client } from '@/app/client';
import { shufflePlaylist, syncPlaylist } from '@/app/utils';
import { schedules } from '@trigger.dev/sdk/v3';

export const syncPlaylistTask = schedules.task({
	id: 'sync-playlist-task',
	cron: '* * * * *',
	run: async payload => {
		if (!payload.externalId) {
			throw new Error('Playlist ID is required');
		}
		const playlist = await client.playlists.getPlaylist(payload.externalId);
		shufflePlaylist(playlist);
		syncPlaylist(payload.externalId, client, playlist);
	},
});
