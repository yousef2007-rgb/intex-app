//React Hooks
import React, { useEffect, useState } from 'react';

//Redux Hooks
import { useSelector, useDispatch } from 'react-redux';

//Custom Components
import Logo from './Logo';
import LanguageButton from './Language';
import Navigation from './Navigation';
import NavigationButton from './Navigation/NavigationButton';
import Cart from './Cart';
import PopUp from '../PopUp/PopUp';
import categories from '../../../data/content.json';
import Search from './Search';

//Redux slice
import { tougleLanguage } from '../../../slices/languageSlice';

//NextJs Components
import Link from 'next/link';
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
		<div className=" top-0 z-50 mb-5 w-full bg-white  pb-5 shadow-lg tablet:fixed tablet:mb-0 tablet:pb-0">
			<header
				className={`z-50 mx-auto flex  h-20 max-w-7xl items-center px-2`}
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
				<div className="mx-auto hidden w-full max-w-[60vw] tablet:block">
					<Search mobile={false} />
				</div>
				<div className="hidden tablet:block">
					<LanguageButton language={content.language} />
				</div>
				<Cart />
			</header>
			<div className="  bg-blue_gray">
				<nav className="mx-auto hidden w-full max-w-7xl justify-between  px-2 text-white tablet:flex">
					{categoriesData.ProductContainerBody.map(
						(category, index) => (
							<Link
								className="h-full  border-b-4 border-transparent py-3 px-1 text-center font-bold capitalize hover:border-white"
								key={index}
								href={`/Products/${category.number}/?title=${category.title}&lang=${lang}`}
							>
								{category.title}
							</Link>
						)
					)}
				</nav>
			</div>
			<div className="flex w-full items-center px-2 tablet:hidden">
				<Search mobile={true} />
				<LanguageButton language={content.language} />
			</div>
		</div>
	);
}
