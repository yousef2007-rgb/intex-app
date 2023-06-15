//NextJS Hooks
import { useRouter } from 'next/router';
import ProductsContainerBodyData from '../../../../data/ProducsContainerBody.json';

//Redux Hooks
import { useDispatch } from 'react-redux';

//Redux Actions
import { tougleLanguage } from '../../../../slices/languageSlice';
import Link from 'next/link';
import { useEffect } from 'react';

//Main Component
export default function LanguageButton({ language }) {
	//Redux Component
	const dispatch = useDispatch();

	// console.log(content);
	//Router

	const router = useRouter();
	const { lang } = router.query;
	const { title } = router.query;
	const { asPath } = router;
	const { products } = router.query;
	const content =
		lang == 'arabic'
			? ProductsContainerBodyData.english
			: ProductsContainerBodyData.arabic;
	const page = content.find((x) => x.number == products);
	if (
		(lang == 'arabic' && language == 'english') ||
		(lang == 'english' && language == 'arabic')
	) {
		dispatch(tougleLanguage());
	}

	return (
		<Link
			className=" flex font-bold capitalize tablet:mx-3"
			style={{
				flexDirection: language == 'arabic' ? 'row-reverse' : 'row',
			}}
			href={
				title == undefined
					? `${asPath.replace(`?lang=${lang}`, '')}?lang=${
							lang == 'arabic' ? 'english' : 'arabic'
					  }`
					: `/Products/${products}?title=${page.title}&lang=${
							lang == 'arabic' ? 'english' : 'arabic'
					  }`
			}
		>
			{language == 'arabic' ? 'EN' : 'AR'}
		</Link>
	);
}
