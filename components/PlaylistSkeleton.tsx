import { Card, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

export default function PlaylistSkeleton() {
	return (
		<Card className="overflow-hidden bg-black/60 border-neutral-800">
			<Skeleton className="h-[200px] bg-neutral-800" />
			<CardHeader>
				<Skeleton className="h-6 w-2/3 bg-neutral-800" />
				<Skeleton className="h-4 w-full mt-2 bg-neutral-800" />
			</CardHeader>
		</Card>
	);
}
