//Redux Hooks
import { useDispatch } from 'react-redux';

//Redux Actions
import { tougleLanguage } from '../../../../slices/languageSlice';

//Main Component
export default function LanguageButton({ language }) {
	//Redux Component
	const dispatch = useDispatch();

	return (
		<button
			className=" flex font-bold capitalize tablet:mx-3"
			style={{
				flexDirection: language == 'arabic' ? 'row-reverse' : 'row',
			}}
			onClick={() => dispatch(tougleLanguage())}
		>
			{language == 'arabic' ? 'EN' : 'AR'}
		</button>
	);
}
