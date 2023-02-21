import Link from 'next/link';
import React from 'react';

export default function Menu({ data, tougle }) {
	return (
		<div className="z-40 mx-auto flex  min-w-fit border-t-4 border-secondery">
			{data.map((item, index) => (
				<section key={index} className=" flex w-60 flex-col">
					<img src={item.image} alt="" />
					<div className=" flex flex-col">
						{item.items.map((element, index) => (
							<Link
								key={index}
								className="w-full p-3 font-bold capitalize transition-all hover:bg-secondery hover:text-white"
								href={element.link}
								onClick={() => tougle()}
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
