import React, { useState, useEffect } from "react";
import Cart from "../../../public/Assets/icons/Cart";
import CartContainer from "../CartComponent/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../../slices/cartSlice";
import { tougleCart } from "../../../slices/cartVisabilitySlice";
export default function Cart2() {
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
		<div className=" mx-2 flex h-28 w-8 cursor-pointer items-center border-t-4 border-transparent hover:border-secondery tablet:relative ">
			<div onClick={() => dispatch(tougleCart())} className="relative">
				{cartItemsNumber != 0 ? (
					<span className=" absolute bottom-4 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold text-white">
						{cartItemsNumber}
					</span>
				) : (
					""
				)}
				<Cart />
			</div>

			<CartContainer cart={cart} />
		</div>
	);
}
