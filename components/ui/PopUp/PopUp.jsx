import React from 'react';
import Background from './Background';

export default function PopUp({ messege: Messege, visability, tougle }) {
	return (
		<>
			<Background visability={visability} tougle={tougle} />
			{Messege}
		</>
	);
}
