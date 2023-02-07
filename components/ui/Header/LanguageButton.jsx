import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tougleLanguage } from '../../../slices/languageSlice';
export function LanguageButton() {
	const dispatch = useDispatch();
	const language = useSelector((state) => state.language);
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
