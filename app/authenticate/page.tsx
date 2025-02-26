'use client';
import { useEffect } from 'react';
import { client } from '../client';
import { redirect } from 'next/navigation';
import { pb } from '../clients/pb';

export default function MyPlaylists() {
	useEffect(() => {
		const authenticate = async () => {
			await client.authenticate();

			const currentUser = await client.currentUser.profile();
			const pbUser = await pb
				.collection('spotify_users')
				.getFirstListItem(`spotifyUserId = "${currentUser.id}"`);
			if (!pbUser) {
				await pb
					.collection('spotify_users')
					.create({ spotifyUserId: currentUser.id });
			}
		};
		authenticate();
		redirect('/my-playlists');
	}, []);
}
