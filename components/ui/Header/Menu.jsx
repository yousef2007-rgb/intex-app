import Link from 'next/link';
import React from 'react';

export default function Menu({ data }) {
	return (
		<div className=" absolute top-full right-1/2 mx-auto  flex   w-full min-w-fit translate-x-1/2 border-t-4 border-secondery bg-white ">
			{data.map((item, index) => (
				<section key={index} className=" flex w-60 flex-col">
					<img src={item.image} alt="" />
					<div className=" flex flex-col">
						{item.items.map((element, index) => (
							<Link
								key={index}
								className="w-full p-3 font-bold capitalize transition-all hover:bg-secondery hover:text-white"
								href={element.link}
							>
								{element.text}
							</Link>
						))}
					</div>
				</section>
			))}
		</div>
	);
}
