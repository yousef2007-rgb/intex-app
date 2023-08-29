import React from 'react';
import Buttons from '../Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Close from '../../../../public/Assets/icons/CloseIcon';
import Logo from './../Logo';
export default function Navigation({
	navigationVisability,
	setNavigationVisability,
	tougle,
}) {
	const content = useSelector((state) => state.language);

	return (
		<nav
			className={`fixed top-0 left-0 z-40 h-screen  w-full flex-col  overflow-auto bg-white p-5 transition-all tablet:w-[35vw] `}
			style={{
				// transform: `translate(${
				// 	navigationVisability == 'flex' ? '0' : '-100vw'
				// },0)`,
				display: navigationVisability,
			}}
		>
			<div className="my-4 flex items-center">
				<Logo navigation={true} />
				<button
					className="my-4 mr-4 ml-auto h-6 w-6"
					onClick={() => setNavigationVisability('none')}
				>
					<Close />
				</button>
			</div>
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
