import React from 'react';

export default function Intro({ link }) {
	return (
		<div className="relative ">
			<img
				src={link}
				alt=""
				className="aspect-[16/7] w-full object-cover"
			/>
		</div>
	);
}
