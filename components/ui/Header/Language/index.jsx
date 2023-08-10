//NextJS Hooks
import { useRouter } from 'next/router';

//Redux Hooks
import { useDispatch } from 'react-redux';

//Redux Actions
import { tougleLanguage } from '../../../../slices/languageSlice';
import Link from 'next/link';

//Main Component
export default function LanguageButton({ language }) {
	//Redux Component
	const dispatch = useDispatch();

	//Router
	const router = useRouter();
	const query = router.query;
	const { lang } = query;
	const { asPath } = router;
	console.log(query);
	if (
		(lang == 'arabic' && language == 'english') ||
		(lang == 'english' && language == 'arabic')
	) {
		dispatch(tougleLanguage());
	}

	return (
		<Link
			className=" felx mx-2 flex h-full items-center text-lg font-bold capitalize"
			style={{
				flexDirection: language == 'arabic' ? 'row-reverse' : 'row',
			}}
			href={
				lang
					? `${asPath.replace(
							`lang=${lang}`,
							`lang=${lang == 'arabic' ? 'english' : 'arabic'}`
					  )}`
					: Object.keys(query).length != 0
					? asPath + '&lang=arabic'
					: asPath + '?lang=arabic'
			}
		>
			{lang == 'arabic' ? 'EN' : 'AR'}
		</Link>
	);
}
