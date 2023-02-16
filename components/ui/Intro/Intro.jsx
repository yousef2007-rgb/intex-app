import React from 'react';

export default function Intro({ imagePath, link, title }) {
	return (
		<div className=" relative mt-20">
			<img
				src={imagePath}
				alt=""
				className="aspect-video w-full object-cover mobile:aspect-[16/3]"
			/>
		</div>
	);
}
