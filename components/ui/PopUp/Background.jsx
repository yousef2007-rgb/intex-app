import React from 'react';
import { useDispatch } from 'react-redux';
export default function Background({ visability, tougle, usingRedux }) {
	const dispatch = useDispatch();
	console.log(typeof tougle);
	return (
		<div
			className=" fixed top-0 left-0  h-screen w-screen "
			style={{
				display: visability,
			}}
			onClick={() => (usingRedux ? dispatch(tougle()) : tougle())}
		></div>
	);
}
