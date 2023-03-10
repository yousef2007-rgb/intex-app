import React from 'react';
import data from '../../../data/Header.json';
import Buttons from './Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Close from '../../../public/Assets/icons/Close';
export default function Navigation({
	navigationVisability,
	setNavigationVisability,
	tougle,
}) {
	const language = useSelector((state) => state.language);
	const uiData = language == 'english' ? data.english : data.arabic;

	return (
		<nav
			className={`fixed top-0 left-0 z-40 h-screen w-[35vw] max-w-xs flex-col items-center bg-white transition-all tablet:max-w-none`}
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
			{uiData.navigation.map((item, index) => (
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
