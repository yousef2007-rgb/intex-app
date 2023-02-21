import React, { createRef, useState } from 'react';
import Chevron from '../../../public/Assets/icons/Chevron';
import Menu from './Menu';

export default function Button({ text, menu, tougle }) {
	const [menuVisablity, setMenuVisablity] = useState('none');
	return (
		<div>
			<button
				className="relative mx-3 flex h-20 items-center border-t-4 border-transparent font-extrabold uppercase hover:border-secondery"
				onClick={() =>
					menuVisablity == 'none'
						? setMenuVisablity('flex')
						: setMenuVisablity('none')
				}
			>
				{text}
				{menu ? (
					<span
						className="mx-2 h-3 w-3 transition-all"
						style={{
							rotate: menuVisablity == 'none' ? '0deg' : '180deg',
						}}
					>
						<Chevron />
					</span>
				) : (
					''
				)}
			</button>
			<div
				style={{
					display: menuVisablity,
				}}
			>
				{menu ? <Menu data={menu} tougle={tougle} /> : ''}
			</div>
		</div>
	);
}
