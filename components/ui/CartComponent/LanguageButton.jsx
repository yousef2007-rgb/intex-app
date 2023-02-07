import React from 'react';
export function LanguageButton({ language, dispatch, tougleLanguage }) {
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
