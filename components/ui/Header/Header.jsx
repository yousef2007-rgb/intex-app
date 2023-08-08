import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Logo from './Logo';
import LanguageButton from './Language';
import Navigation from './Navigation';
import NavigationButton from './Navigation/NavigationButton';
import Cart from './Cart';
import Search from './Search';
import PopUp from '../PopUp/PopUp';
import { tougleLanguage } from '../../../slices/languageSlice';

export default function Header() {
	const content = useSelector((state) => state.language);
	const [navigationVisability, setNavigationVisability] = useState('none');
	const toggleNavigationVisability = () => {
		setNavigationVisability(
			navigationVisability == 'flex' ? 'none' : 'flex'
		);
	};
	const dispatch = useDispatch();
	useEffect(() => {
		if (
			JSON.parse(window.localStorage.getItem('language')) == 'arabic' &&
			content.language == 'english'
		) {
			dispatch(tougleLanguage());
		}
	}, []);

	return (
		<div className=" fixed top-0 z-50 w-full bg-white shadow-lg ">
			<header
				className={`z-50 mx-auto flex h-20 max-w-5xl items-center `}
			>
				<NavigationButton
					setNavigationVisability={setNavigationVisability}
				/>
				<Logo />
				<PopUp
					messege={
						<Navigation
							navigationVisability={navigationVisability}
							setNavigationVisability={setNavigationVisability}
							tougle={toggleNavigationVisability}
						/>
					}
					visability={navigationVisability}
					tougle={toggleNavigationVisability}
					usingRedux={false}
				/>
				<LanguageButton language={content.language} />
				<Cart />
				<Search />
			</header>
		</div>
	);
}
