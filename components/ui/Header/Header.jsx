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
		<div className=" fixed top-0 z-50 w-full bg-white shadow-lg ">
			<header className={`z-50 flex h-20 items-center px-5`}>
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
				<Search />
				<LanguageButton language={content.language} />
				<Cart />
				<MobileSearch />
			</header>
			<nav className="hidden w-full justify-evenly bg-primary text-white tablet:flex">
				{categoriesData.ProductContainerBody.map((category, index) => (
					<Link
						className="h-full  py-2 px-1 text-center font-bold capitalize hover:bg-secondery"
						key={index}
						href={`/Products/${category.number}/?title=${category.title}&lang=${lang}`}
					>
						{category.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
