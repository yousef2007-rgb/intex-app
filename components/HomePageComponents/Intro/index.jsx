import React from 'react';

export default function Intro({ intros }) {
	return (
		<div className="relative flex flex-row-reverse flex-wrap justify-evenly pt-5">
			{intros.map((item, index) => (
				<a
					className={`my-[0.125rem] min-w-[150px] ${
						item.aspectRatio == '1/1' ? 'w-[49%]' : 'w-[99%]'
					}  rounded-xl shadow-xl transition-all hover:shadow-2xl ${
						item.aspectRatio == '1/1' ? 'mobile:w-[24%]' : ''
					} `}
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
