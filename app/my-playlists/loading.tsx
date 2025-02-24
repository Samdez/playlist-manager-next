import PlaylistSkeleton from '@/components/PlaylistSkeleton';

export default function Loading() {
	return (
		<main className="min-h-screen bg-neutral-950 bg-gradient-to-b from-emerald-950/50 to-neutral-950">
			<div className="container mx-auto py-8 px-2">
				<h1 className="text-4xl font-bold mb-8 text-white text-center">
					My Playlists
				</h1>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					{[...Array(12)].map((_, i) => (
						<PlaylistSkeleton key={i} />
					))}
				</div>
			</div>
		</main>
	);
}
