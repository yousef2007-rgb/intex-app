import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import LanguageButton from './LanguageButton';
import Navigation from './Navigation';
import Cart from './Cart';
import Search from './Searching';
import { useSelector, useDispatch } from 'react-redux';
import { tougleLanguage } from '../../../slices/languageSlice';
import MenuICon from '../../../public/Assets/icons/MenuICon';
import PopUp from '../PopUp/PopUp';
import { ViewAllButton } from './../ProductsContainer/ViewAllButton';
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
		console.log(JSON.parse(window.localStorage.getItem('language')));
		console.log('Hello World');

		if (
			JSON.parse(window.localStorage.getItem('language')) == 'arabic' &&
			language == 'english'
		) {
			dispatch(tougleLanguage());
			console.log(JSON.parse(window.localStorage.getItem('language')));
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
				<button
					className=" mx-4 h-8 w-8"
					onClick={() => setNavigationVisability('flex')}
				>
					<MenuICon />
				</button>
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
