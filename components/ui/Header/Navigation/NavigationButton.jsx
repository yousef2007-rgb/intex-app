import React from 'react';
import MenuICon from '../../../../public/Assets/icons/MenuICon';

export default function NavigationButton({ setNavigationVisability }) {
	return (
		<div className="mr-[32px] block min-w-[54.11px] flex-1 tablet:mr-0 tablet:hidden tablet:w-fit">
			<button
				className="  h-full w-10 "
				onClick={() => setNavigationVisability('flex')}
			>
				<MenuICon />
			</button>
		</div>
	);
}
