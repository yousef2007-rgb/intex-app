import React from 'react';
import { useDispatch } from 'react-redux';
export function Background({ visability, tougle }) {
	const dispatch = useDispatch();
	return (
		<div
			className=" fixed top-0 left-0  h-screen w-screen "
			style={{
				display: visability,
			}}
			onClick={() => dispatch(tougle())}
		></div>
	);
}
