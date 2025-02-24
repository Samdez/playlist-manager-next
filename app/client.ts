import { SpotifyApi } from '@spotify/web-api-ts-sdk';

const scopes = [
	'ugc-image-upload',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	'streaming',
	'app-remote-control',
	'user-read-email',
	'user-read-private',
	'playlist-read-collaborative',
	'playlist-modify-public',
	'playlist-read-private',
	'playlist-modify-private',
	'user-library-modify',
	'user-library-read',
	'user-top-read',
	'user-read-playback-position',
	'user-read-recently-played',
	'user-follow-read',
	'user-follow-modify',
];
console.log(process.env.SPOTIFY_CLIENT_ID);
export const client = SpotifyApi.withUserAuthorization(
	process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
	'http://localhost:3000/my-playlists',
	scopes
);
