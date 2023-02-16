import Logo from './Logo';
import LanguageButton from './LanguageButton';
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Cart from './Cart';
import Search from './Searching';
import { useSelector, useDispatch } from 'react-redux';
import { tougleLanguage } from '../../../slices/languageSlice';
export default function Header() {
	const language = useSelector((state) => state.language);
	const dispatch = useDispatch();
	useEffect(() => {
		if (
			JSON.parse(window.localStorage.getItem('language')) == 'arabic' &&
			language == 'english'
		) {
			dispatch(tougleLanguage());
		}
	}, []);
	return (
		<div className=" fixed top-0 z-50 w-full bg-white shadow-lg ">
			<header
				className={` mx-auto flex h-20 max-w-5xl items-center`}
				style={{
					flexDirection: language == 'arabic' ? 'row-reverse' : 'row',
				}}
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
