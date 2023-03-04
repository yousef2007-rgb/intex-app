import React from 'react';

export default function Intro({ intros }) {
	console.log(intros);
	return (
		<div className="relative mt-16 flex flex-wrap justify-evenly py-5">
			{intros.map((item, index) => (
				<a
					style={{
						width: item.aspectRatio == '1/1' ? '48%' : '98%',
					}}
					className="my-2"
					key={index}
					href={item.link}
				>
					<img
						className="w-full rounded-xl object-cover"
						src={item.src}
						alt="intro"
						style={{
							aspectRatio: item.aspectRatio,
						}}
					/>
				</a>
			))}
		</div>
	);
}
