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
				className="relative flex h-20 w-full items-center border-t-4 border-transparent px-3 font-extrabold uppercase hover:border-secondery"
				style={{
					justifyContent: lang == 'arabic' ? 'end' : 'start',
				}}
				onClick={() =>
					menuVisablity == 'none'
						? setMenuVisablity('flex')
						: setMenuVisablity('none')
				}
			>
				{text}
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
