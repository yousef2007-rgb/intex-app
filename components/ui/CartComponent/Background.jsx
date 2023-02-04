import React from 'react';
export function Background({ visability, dispatch, tougleCart }) {
	return (
		<div
			className=" fixed top-0 left-0  h-screen w-screen "
			style={{
				display: visability,
			}}
			onClick={() => dispatch(tougleCart())}
		></div>
	);
}
