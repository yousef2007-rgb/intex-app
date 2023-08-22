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

	//React Hooks
	const [isOpen, setIsOpen] = useState(false);

	//Functions
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative mx-2 inline-block h-full text-left">
			<button
				onClick={toggleDropdown}
				type="button"
				className="inline-flex h-[50px] w-[40px] items-center justify-center rounded-xl  border-2 bg-white px-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none "
				id="options-menu"
				aria-haspopup="true"
				aria-expanded="true"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					className="w-full fill-gray-500"
				>
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="32"
						d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384"
					/>
					<path
						d="M256 336s-35-27-72-75-56-85-56-85"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="32"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="absolute right-0 z-30 mt-2 w-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<Link
							className="block w-10 px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
							style={{
								flexDirection:
									language == 'arabic'
										? 'row-reverse'
										: 'row',
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
							onClick={() => setIsOpen(false)}
						>
							EN
						</Link>
						<Link
							className="block w-10 px-2 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
							style={{
								flexDirection:
									language == 'arabic'
										? 'row-reverse'
										: 'row',
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
							onClick={() => setIsOpen(false)}
						>
							AR
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
