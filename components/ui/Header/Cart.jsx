import React, { useState, useEffect } from 'react';
import CartContainer from '../CartComponent/CartContainer';
import CartButton from '../CartComponent/CartButton';

export default function Cart2() {
	return (
		<div className=" mx-2 flex h-28 w-8 cursor-pointer items-center border-t-4 border-transparent hover:border-secondery desktop:relative ">
			<CartButton />
			<CartContainer />
		</div>
	);
}
