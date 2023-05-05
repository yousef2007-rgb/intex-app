//React Hooks
import React, { useState, useEffect } from 'react';

//Redux Hooks
import { useDispatch, useSelector } from 'react-redux';

//Redux Actions
import { tougleCart } from '../../../../slices/cartVisabilitySlice';

//Asstes
import CartIcon from '../../../../public/Assets/icons/CartIcon';

//Main Component
export default function CartButton() {
	//Redux Hooks
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	//React Hooks
	const [cartItemsNumber, setCartItemsNumber] = useState(0);
	useEffect(() => {
		let num = 0;
		for (let i = 0; i < cart.length; i++) {
			num = num + cart[i].quantity;
		}
		setCartItemsNumber(num);
	}, [cart]);

	return (
		<div
			onClick={() => dispatch(tougleCart())}
			className="relative shadow-2xl"
		>
			{cartItemsNumber != 0 ? (
				<span className=" absolute bottom-4 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold text-white">
					{cartItemsNumber}
				</span>
			) : (
				''
			)}
			<CartIcon />
		</div>
	);
}
