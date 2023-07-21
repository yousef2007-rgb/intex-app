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

	if (
		(lang == 'arabic' && language == 'english') ||
		(lang == 'english' && language == 'arabic')
	) {
		dispatch(tougleLanguage());
	}
	console.log(asPath);
	return (
		<Link
			className=" flex font-bold capitalize tablet:mx-3"
			style={{
				flexDirection: language == 'arabic' ? 'row-reverse' : 'row',
			}}
			href={
				lang
					? `${asPath.replace(
							`lang=${lang}`,
							`lang=${lang == 'arabic' ? 'english' : 'arabic'}`
					  )}`
					: !query
					? asPath + '?lang=arabic'
					: asPath + '&lang=arabic'
			}
		>
			{language == 'arabic' ? 'EN' : 'AR'}
		</Link>
	);
}
