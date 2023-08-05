import { useRouter } from 'next/router';
import React from 'react';

export default function Intro({ intros }) {
	const { lang } = useRouter().query;
	return (
		<div className="relative flex flex-row-reverse flex-wrap justify-evenly pt-5">
			{intros.map((item, index) => (
				<a
					className={`relative  my-[0.8vw] ${
						item.aspectRatio == '1/1' ? 'w-[47%]' : 'w-[97%]'
					}  rounded-xl shadow-xl transition-all hover:shadow-2xl ${
						item.aspectRatio == '1/1' ? 'mobile:w-[23%]' : ''
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
					<span
						className={`absolute  bottom-[6%] w-full text-center capitalize text-white mobile:!text-[${
							item.aspectRatio == '1/1' ? '2.7vw' : '4vw'
						}]`}
						style={{
							fontSize: item.aspectRatio == '1/1' ? '5vw' : '6vw',
						}}
					>
						{lang == 'arabic' ? item.text.ar : item.text.en}
					</span>
				</a>
			))}
		</div>
	);
}
