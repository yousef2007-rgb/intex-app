import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import LanguageButton from './LanguageButton';
import Navigation from './Navigation';
import NavigationButton from './NavigationButton';
import Cart from './Cart';
import Search from './Searching';
import { useSelector, useDispatch } from 'react-redux';
import { tougleLanguage } from '../../../slices/languageSlice';
import PopUp from '../PopUp/PopUp';
export default function Header() {
	const language = useSelector((state) => state.language);
	const [navigationVisability, setNavigationVisability] = useState('none');
	const tougleNavigationVisability = () => {
		setNavigationVisability(
			navigationVisability == 'flex' ? 'none' : 'flex'
		);
	};
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
				className={`z-50 mx-auto flex h-20 max-w-5xl items-center`}
				style={{
					flexDirection: language == 'arabic' ? 'row-reverse' : 'row',
				}}
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
							tougle={tougleNavigationVisability}
						/>
					}
					visability={navigationVisability}
					tougle={tougleNavigationVisability}
					usingRedux={false}
				/>
				<LanguageButton />
				<Cart />
				<Search />
			</header>
		</div>
	);
}
