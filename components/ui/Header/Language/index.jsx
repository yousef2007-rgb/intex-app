//NextJS Hooks
import { useRouter } from 'next/router';

//Redux Hooks
import { useDispatch } from 'react-redux';

//Redux Actions
import { tougleLanguage } from '../../../../slices/languageSlice';
import Link from 'next/link';
import { useState } from 'react';

//Main Component
export default function LanguageButton({ language }) {
	//Redux Component
	const dispatch = useDispatch();

	//Router
	const router = useRouter();
	const query = router.query;
	const { lang } = query;
	const { asPath } = router;

	//Change the language according to the router query
	if (
		(lang == 'arabic' && language == 'english') ||
		(lang == 'english' && language == 'arabic')
	) {
		dispatch(tougleLanguage());
	}

	//Functions

	return (
		<div className="relative mx-2 inline-block h-full text-left">
			<button
				type="button"
				className="inline-flex h-[50px] w-[40px] items-center justify-center rounded-xl  border-2 bg-white px-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none "
				id="options-menu"
			>
				{lang == 'arabic' ? (
					<Link
						className="block w-10 px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
						style={{
							flexDirection:
								language == 'arabic' ? 'row-reverse' : 'row',
						}}
						href={
							lang
								? `${asPath.replace(
										`lang=${lang}`,
										`lang=english`
								  )}`
								: Object.keys(query).length != 0
								? asPath + '&lang=english'
								: asPath + '?lang=english'
						}
					>
						EN
					</Link>
				) : (
					<Link
						className="block w-10 px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
						style={{
							flexDirection:
								language == 'arabic' ? 'row-reverse' : 'row',
						}}
						href={
							lang
								? `${asPath.replace(
										`lang=${lang}`,
										`lang=arabic`
								  )}`
								: Object.keys(query).length != 0
								? asPath + '&lang=arabic'
								: asPath + '?lang=arabic'
						}
					>
						AR
					</Link>
				)}
			</button>
		</div>
	);
}
