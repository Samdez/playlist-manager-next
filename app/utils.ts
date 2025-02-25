import { IPlaylist } from './my-playlists/page';

export function shuffleTracks(playlist: IPlaylist) {
	const shuffledPlaylist = {
		...playlist,
		tracks: {
			...playlist.tracks,
			items: [...playlist.tracks.items],
		},
	};

	for (let i = shuffledPlaylist.tracks.items.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledPlaylist.tracks.items[i], shuffledPlaylist.tracks.items[j]] = [
			shuffledPlaylist.tracks.items[j],
			shuffledPlaylist.tracks.items[i],
		];
	}
	console.log('🚀 ~ shuffleTracks ~ shuffledPlaylist:', shuffledPlaylist);
	return shuffledPlaylist;
}
