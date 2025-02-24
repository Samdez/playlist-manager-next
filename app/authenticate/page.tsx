'use client';
import { useEffect } from 'react';
import { client } from '../client';
import { redirect } from 'next/navigation';

export default function MyPlaylists() {
	useEffect(() => {
		const authenticate = async () => {
			await client.authenticate();
			const user = await client.currentUser.profile();
			console.log('🚀 ~ authenticate ~ user:', user);
		};
		authenticate();
		redirect('/my-playlists');
	}, []);
}
