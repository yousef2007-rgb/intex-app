import React from 'react';
import Search from '../../../../public/Assets/icons/SearchIcon';
import Close from '../../../../public/Assets/icons/CloseIcon';
import { tougle } from '../../../../slices/searchVisabilitySlice';
import { useDispatch } from 'react-redux';
export default function SearchBody({ searchVisability }) {
	const dispatch = useDispatch();
	return (
		<button
			className={`w-6`}
			style={{
				position: searchVisability == 'none' ? 'relative' : 'absolute',
				right: searchVisability == 'none' ? 'unset' : '30px',
			}}
			onClick={() => dispatch(tougle())}
		>
			{searchVisability == 'none' ? <Search /> : <Close />}
		</button>
	);
}
