'use client';
import { useEffect, useState } from 'react';
import { client } from '../../client';
import { Playlist, Track } from '@spotify/web-api-ts-sdk';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { useParams } from 'next/navigation';
import { shufflePlaylist, syncPlaylist } from '@/app/utils';
import { Button } from '@/components/ui/button';
import * as motion from 'motion/react-client';
import { spring } from 'motion/react';
import { addCron } from '@/app/actions/add-cron';

export default function PlaylistDetail() {
	const params = useParams<{ id: string }>();
	const [playlist, setPlaylist] = useState<Playlist | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPlaylist = async () => {
			try {
				const response = await client.playlists.getPlaylist(params.id);
				setPlaylist(response);
			} catch (error) {
				console.error('Failed to fetch playlist:', error);
			} finally {
				setLoading(false);
			}
		};
		getPlaylist();
	}, [params.id]);

	function handleShufflePlaylist() {
		if (playlist) {
			const shuffledTracks = shufflePlaylist(playlist);
			if (!shuffledTracks) return;
			const timeout = setTimeout(() => setPlaylist(shuffledTracks), 100);
			return () => clearTimeout(timeout);
		}
	}
	async function handleSyncPlaylist(playlist: Playlist) {
		try {
			syncPlaylist(params.id, client, playlist);
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			}
		}
	}

	if (loading) {
		return (
			<div className="space-y-6">
				<div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end">
					<Skeleton className="h-48 w-48" />
					<div className="space-y-2 text-center sm:text-left">
						<Skeleton className="h-8 w-48" />
						<Skeleton className="h-4 w-24" />
					</div>
				</div>
				<Skeleton className="h-[600px] w-full rounded-xl" />
			</div>
		);
	}

	if (!playlist) return null;

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row gap-6 items-center sm:items-end text-center sm:text-left">
				<Image
					src={playlist.images[0]?.url || '/playlist-placeholder.png'}
					alt={playlist.name}
					width={192}
					height={192}
					className="rounded-lg shadow-lg"
				/>
				<div>
					<h1 className="text-4xl font-bold text-white">{playlist.name}</h1>
					<p className="text-neutral-400">{playlist.tracks.total} tracks</p>
				</div>
				<Button onClick={handleShufflePlaylist}>Shuffle</Button>
				<Button onClick={() => handleSyncPlaylist(playlist)}>Sync</Button>
				<Button onClick={() => addCron(params.id, 'minute')}>
					Add CRON 1MIN
				</Button>
				<Button onClick={() => addCron(params.id, 'hour')}>
					Add CRON 1HOUR
				</Button>
			</div>

			<div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 sm:p-6">
				<div className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2 sm:gap-4 px-2 mb-4 text-sm text-neutral-400 font-medium">
					<div className="w-8 sm:w-10">#</div>
					<div className="w-8 sm:w-10"></div>
					<div>TITLE</div>
					<div className="w-14 sm:w-20 text-right">DURATION</div>
				</div>

				<ul className="divide-y divide-white/5">
					{playlist.tracks.items.map((item, index) => {
						const track = item.track as Track;
						return (
							<motion.li
								key={track.id}
								className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2 sm:gap-4 p-2 hover:bg-white/5 transition-colors group"
								layout
								transition={spring}
							>
								<div className="w-8 sm:w-10 text-white">{index + 1}</div>
								<Image
									src={track.album.images[0]?.url || '/track-placeholder.png'}
									alt={track.name}
									width={32}
									height={32}
									className="rounded w-8 h-8 sm:w-10 sm:h-10"
								/>
								<div className="min-w-0">
									<div className="text-white truncate group-hover:text-emerald-400 text-sm sm:text-base">
										{track.name}
									</div>
									<div className="text-neutral-400 text-xs sm:text-sm truncate">
										{track.artists.map(a => a.name).join(', ')}
									</div>
								</div>
								<div className="text-neutral-400 text-sm w-14 sm:w-20 text-right">
									{formatDuration(track.duration_ms)}
								</div>
							</motion.li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

function formatDuration(ms: number): string {
	const minutes = Math.floor(ms / 60000);
	const seconds = Math.floor((ms % 60000) / 1000);
	return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
