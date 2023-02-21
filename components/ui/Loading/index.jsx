import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const Loading = () => {
	const [visability, setVisability] = useState(false);
	const router = useRouter();
	useEffect(() => {
		const handleStart = (url) =>
			url !== router.asPath && setVisability(true);
		const handleComplete = (url) =>
			url === router.asPath && setVisability(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	});
	return (
		<div
			className=" fixed top-0 left-0 z-30  h-screen w-screen items-center justify-center bg-white"
			style={{ display: visability ? 'flex' : 'none' }}
		>
			<img
				className=" mx-auto w-20"
				src="/Assets/GIF/Loading_icon.gif"
				alt="loading gif"
			/>
		</div>
	);
};
export default Loading;
