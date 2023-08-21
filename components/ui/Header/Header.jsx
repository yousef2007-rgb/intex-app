import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Logo from './Logo';
import LanguageButton from './Language';
import Navigation from './Navigation';
import NavigationButton from './Navigation/NavigationButton';
import Cart from './Cart';
import MobileSearch from './MobileSearch';
import PopUp from '../PopUp/PopUp';
import { tougleLanguage } from '../../../slices/languageSlice';
import SearchIcon from '../../../public/Assets/icons/SearchIcon';
import categories from '../../../data/content.json';

// import searchIcon from '../../../';
import Link from 'next/link';
import Search from './Search';
import { useRouter } from 'next/router';

export default function Header() {
	const content = useSelector((state) => state.language);
	const { lang } = useRouter().query;
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
	const categoriesData = lang == 'arabic' ? categories.ar : categories.en;
	return (
		<div className=" top-0 z-50 mb-5 w-full bg-white px-2 pb-5 shadow-lg tablet:fixed tablet:mb-0 tablet:pb-0">
			<header className={`z-50 mx-auto flex h-20 max-w-7xl items-center`}>
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
				<div className="mx-auto hidden w-full max-w-[60vw] tablet:block">
					<Search mobile={false} />
				</div>
				<LanguageButton language={content.language} />
				<Cart />
				{/* <MobileSearch /> */}
			</header>
			<nav className="mx-auto hidden w-full max-w-7xl justify-between bg-white text-black tablet:flex">
				{categoriesData.ProductContainerBody.map((category, index) => (
					<Link
						className="h-full  border-b-4 border-transparent py-4 px-1 text-center font-bold capitalize hover:border-secondery"
						key={index}
						href={`/Products/${category.number}/?title=${category.title}&lang=${lang}`}
					>
						{category.title}
					</Link>
				))}
			</nav>
			<div className="block w-full tablet:hidden">
				<Search mobile={true} />
			</div>
		</div>
	);
}
