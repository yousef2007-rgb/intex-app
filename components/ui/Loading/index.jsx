import React from 'react';
const Loading = ({ visablilty }) => {
	return (
		<div
			className=" fixed top-0 left-0 z-30  h-screen w-screen items-center justify-center bg-white"
			style={{ display: visablilty ? 'flex' : 'none' }}
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
