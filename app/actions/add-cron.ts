'use server';
import {
	syncPlaylistEveryDayTask,
	syncPlaylistEveryHourTask,
	syncPlaylistEveryMinuteTask,
	syncPlaylistEveryWeekTask,
} from '@/trigger/sync-playlist-task';
import { schedules } from '@trigger.dev/sdk/v3';

const getCronTask = (frequency: 'minute' | 'hour' | 'day' | 'week') => {
	switch (frequency) {
		case 'minute':
			return { task: syncPlaylistEveryMinuteTask, frequency: '* * * * *' };
		case 'hour':
			return { task: syncPlaylistEveryHourTask, frequency: '0 * * * *' };
		case 'day':
			return { task: syncPlaylistEveryDayTask, frequency: '0 0 * * *' };
		case 'week':
			return { task: syncPlaylistEveryWeekTask, frequency: '0 0 * * 1' };
	}
};

export async function addCron(
	playlistId: string,
	frequency: 'minute' | 'hour' | 'day' | 'week'
) {
	await schedules.create({
		task: getCronTask(frequency).task.id,
		cron: getCronTask(frequency).frequency,
		deduplicationKey: `playlistId:${playlistId}`,
		externalId: playlistId,
	});
}
