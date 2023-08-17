import { useRouter } from 'next/router';
import React from 'react';

export default function Intro({ intros }) {
	const { lang } = useRouter().query;
	return (
		<div className=" mx-auto flex max-w-7xl flex-row-reverse flex-wrap justify-evenly rounded-2xl bg-white pt-5">
			{intros.map((item, index) => (
				<a
					className={`relative my-[1vw]  bg-blue_gray ${
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
						className={`absolute bottom-[6%] w-full text-center capitalize text-white  ${
							item.aspectRatio == '1/1'
								? 'mobile:!text-[2.7vw]'
								: 'mobile:!text-[5vw]'
						} ${
							item.aspectRatio == '1/1'
								? 'desktop:!text-4xl'
								: 'desktop:!text-6xl'
						}`}
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
