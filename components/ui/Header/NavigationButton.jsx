import React from 'react';
import MenuICon from '../../../public/Assets/icons/MenuICon';

export default function NavigationButton({ setNavigationVisability }) {
	return (
		<button
			className=" mx-4 h-8 w-8"
			onClick={() => setNavigationVisability('flex')}
		>
			<MenuICon />
		</button>
	);
}
