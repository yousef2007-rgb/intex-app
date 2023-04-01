import React from 'react';
import { useDispatch } from 'react-redux';
export default function Background({
	visability,
	tougle,
	usingRedux,
	background,
}) {
	const dispatch = useDispatch();
	return (
		<div
			className=" fixed top-0 left-0 h-screen w-screen "
			style={{
				display: visability,
				backdropFilter: background ? 'blur(3px)' : '',
				backgroundColor: background ? 'rgba(0,0,0,0.4)' : '',
			}}
			onClick={() => (usingRedux ? dispatch(tougle()) : tougle())}
		></div>
	);
}
