export default function PlaylistsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="min-h-screen bg-neutral-950 bg-gradient-to-b from-emerald-950/50 to-neutral-950">
			<div className="container mx-auto py-8 px-2">{children}</div>
		</main>
	);
}
