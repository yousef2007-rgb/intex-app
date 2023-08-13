import React, { createRef, useState } from 'react';
import Chevron from '../../../public/Assets/icons/ChevronIcon';
import Menu from './Navigation/Menu';
import { useRouter } from 'next/router';

export default function Button({ text, menu, tougle }) {
	const [menuVisablity, setMenuVisablity] = useState('none');
	const router = useRouter();
	const query = router.query;
	const { lang } = query;
	console.log(lang);
	return (
		<div
			style={{
				textAlign: lang == 'arabic' ? 'right' : 'left',
			}}
		>
			<button
				className="relative my-4 flex h-fit w-full items-center justify-center  rounded-xl bg-gray-300 bg-opacity-50 p-3 text-center font-extrabold uppercase outline-none drop-shadow-xl backdrop-blur-xl hover:bg-opacity-20"
				onClick={() =>
					menuVisablity == 'none'
						? setMenuVisablity('flex')
						: setMenuVisablity('none')
				}
			>
				<span className="mx-2">{text}</span>
				<span
					className="w-4 transition-all"
					style={{
						rotate: menuVisablity != 'none' ? '-180deg' : 'unset',
					}}
				>
					<Chevron />
				</span>
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
