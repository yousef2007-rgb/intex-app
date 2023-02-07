import Logo from './Logo';
import LanguageButton from './LanguageButton';
import React from 'react';
import Navigation from './Navigation';
import Cart from './Cart';
import Search from './Searching';
import { useSelector } from 'react-redux';

export default function Header() {
	const language = useSelector((state) => state.language);
	return (
		<div className=" fixed top-0 z-50 w-full bg-white shadow-lg ">
			<header
				className={` flex-${
					language == 'arabic' ? 'row-reverse' : 'row'
				} mx-auto flex h-28 max-w-5xl items-center`}
			>
				<Logo />
				<Navigation />
				<LanguageButton />
				<Cart />
				<Search />
			</header>
		</div>
	);
}
