import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { IPlaylist } from '@/app/my-playlists/page';

export default function PlaylistCard({ playlist }: { playlist: IPlaylist }) {
	return (
		<Card
			key={playlist.id}
			className="overflow-hidden hover:shadow-lg transition-shadow bg-black/60 border-neutral-800 hover:bg-black/80"
		>
			<div className="aspect-square relative">
				<Image
					src={playlist.images?.[0]?.url || '/playlist-placeholder.png'}
					alt={playlist.name}
					className="object-cover w-full h-full"
					width={100}
					height={100}
					unoptimized
				/>
			</div>
			<CardHeader>
				<CardTitle className="line-clamp-1 text-white">
					{playlist.name}
				</CardTitle>
				<CardDescription className="line-clamp-2 text-neutral-400">
					{playlist.description || `${playlist.tracks.total} tracks`}
				</CardDescription>
			</CardHeader>
		</Card>
	);
}
