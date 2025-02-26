'use server';
import { firstScheduledTask } from '@/trigger/example';
import { schedules } from '@trigger.dev/sdk/v3';

export async function addCron(playlistId: string) {
	console.log('addCron', playlistId);
	await schedules.create({
		task: firstScheduledTask.id,
		cron: '* * * * *',
		deduplicationKey: `playlist-${playlistId}`,
		externalId: playlistId,
	});
}
