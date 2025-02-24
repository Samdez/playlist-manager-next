'use client';
import { useEffect } from 'react';
import { client } from '../client';
import { redirect } from 'next/navigation';

export default function MyPlaylists() {
	useEffect(() => {
		const authenticate = async () => {
			await client.authenticate();
		};
		authenticate();
		redirect('/my-playlists');
	}, []);
}
