'use client';
import { useEffect, useState } from 'react';
import { client } from '../client';
import { Playlist, TrackItem } from '@spotify/web-api-ts-sdk';
import PlaylistCard from '@/components/PlaylistCard';
import PlaylistSkeleton from '@/components/PlaylistSkeleton';

export type IPlaylist = Playlist<TrackItem>;

export default function MyPlaylists() {
	const [playlists, setPlaylists] = useState<IPlaylist[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPlaylists = async () => {
			try {
				const user = await client.currentUser.profile();
				const response = await client.playlists.getUsersPlaylists(user.id);
				setPlaylists(response.items);
			} catch (error) {
				console.error('Failed to fetch playlists:', error);
			} finally {
				setLoading(false);
			}
		};
		getPlaylists();
	}, []);

	return (
		<main className="min-h-screen bg-neutral-950 bg-gradient-to-b from-emerald-950/50 to-neutral-950">
			<div className="container mx-auto py-8 px-2">
				<h1 className="text-4xl font-bold mb-8 text-white text-center">
					My Playlists
				</h1>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					{loading
						? [...Array(12)].map((_, i) => <PlaylistSkeleton key={i} />)
						: playlists.map(playlist => (
								<PlaylistCard key={playlist.id} playlist={playlist} />
							))}
				</div>
			</div>
		</main>
	);
}
