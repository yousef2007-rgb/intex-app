import React from 'react';
import Search from '../../../public/Assets/icons/Search';
import Close from '../../../public/Assets/icons/Close';
import { tougle } from '../../../slices/searchVisabilitySlice';
import { useDispatch } from 'react-redux';
export default function SearchBody({ searchVisability }) {
	const dispatch = useDispatch();
	return (
		<button
			style={{
				position: searchVisability == 'none' ? 'relative' : 'absolute',
				right: '25%',
			}}
			className={` z-[${searchVisability == 'none' ? 0 : 50}] w-6`}
			onClick={() => dispatch(tougle())}
		>
			{searchVisability == 'none' ? <Search /> : <Close />}
		</button>
	);
}
