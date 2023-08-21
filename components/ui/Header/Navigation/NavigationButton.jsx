import React from 'react';
import MenuICon from '../../../../public/Assets/icons/MenuICon';

export default function NavigationButton({ setNavigationVisability }) {
	return (
		<button
			className="  h-full w-10 tablet:hidden"
			onClick={() => setNavigationVisability('flex')}
		>
			<MenuICon />
		</button>
	);
}
