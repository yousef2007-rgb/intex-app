import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tougleLanguage } from '../../../slices/languageSlice';
export default function LanguageButton() {
	const dispatch = useDispatch();
	const language = useSelector((state) => state.language);
	return (
		<button
			className=" flex font-bold capitalize tablet:mx-3"
			style={{
				flexDirection:
					language.language == 'arabic' ? 'row-reverse' : 'row',
				marginLeft: language.language == 'english' ? 'auto' : 'unset',
				marginRight: language.language == 'arabic' ? 'auto' : 'unset',
			}}
			onClick={() => dispatch(tougleLanguage())}
		>
			{language.language == 'arabic' ? 'EN' : 'AR'}
		</button>
	);
}
