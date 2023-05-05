import React from 'react';
import Buttons from '../Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Close from '../../../../public/Assets/icons/CloseIcon';
export default function Navigation({
	navigationVisability,
	setNavigationVisability,
	tougle,
}) {
	const content = useSelector((state) => state.language);

	return (
		<nav
			className={`fixed top-0 left-0 z-40 h-screen w-full max-w-xs flex-col items-center bg-white transition-all tablet:w-[35vw] tablet:max-w-none`}
			style={{
				transform: `translate(${
					navigationVisability == 'flex' ? 0 : '-1000px'
				},0)`,
			}}
		>
			<button
				className="my-4 h-6 w-6"
				onClick={() => setNavigationVisability('none')}
			>
				<Close />
			</button>
			{content.Header.navigation.map((item, index) => (
				<Buttons
					key={index}
					text={item.title}
					link={item.link}
					menu={item.menu}
					tougle={tougle}
				/>
			))}
		</nav>
	);
}
