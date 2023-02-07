import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tougleCart } from '../../../slices/cartVisabilitySlice';
import Cart from '../../../public/Assets/icons/Cart';
export function CartButton() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [cartItemsNumber, setCartItemsNumber] = useState(0);
	useEffect(() => {
		let num = 0;
		for (let i = 0; i < cart.length; i++) {
			num = num + cart[i].quantity;
		}
		setCartItemsNumber(num);
	}, [cart]);
	return (
		<div onClick={() => dispatch(tougleCart())} className="relative">
			{cartItemsNumber != 0 ? (
				<span className=" absolute bottom-4 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold text-white">
					{cartItemsNumber}
				</span>
			) : (
				''
			)}
			<Cart />
		</div>
	);
}
