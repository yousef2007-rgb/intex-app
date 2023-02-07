import React, { createRef, useState } from 'react';
import Chevron from '../../../public/Assets/icons/Chevron';
import Menu from './Menu';
import Link from 'next/link';
export default function Button({ text, menu, link }) {
	const [menuVisablity, setMenuVisablity] = useState('none');
	return (
		<div>
			<button
				onMouseEnter={() => setMenuVisablity('flex')}
				onMouseLeave={() => setMenuVisablity('none')}
				className=" relative mx-3 flex h-28 items-center   border-t-4 border-transparent font-extrabold uppercase hover:border-secondery [&>span]:hover:rotate-180"
			>
				{text}
				{menu ? (
					<span className="mx-2 h-3 w-3">
						<Chevron />
					</span>
				) : (
					''
				)}
				<div
					style={{
						display: menuVisablity,
					}}
				>
					{menu ? <Menu data={menu} /> : ''}
				</div>
			</button>
		</div>
	);
}
