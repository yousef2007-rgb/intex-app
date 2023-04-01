import React from 'react';
import Background from './Background';

export default function PopUp({
	messege: Messege,
	visability,
	tougle,
	usingRedux,
	background,
}) {
	return (
		<>
			<Background
				visability={visability}
				tougle={tougle}
				usingRedux={usingRedux}
				background={background}
			/>
			{Messege}
		</>
	);
}
