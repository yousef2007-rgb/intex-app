//Imports Region
//	React Hooks
import React, { useEffect } from 'react';
//	Redux Hooks
import { useSelector } from 'react-redux';
//	React Components
import CartItem from './CartItem';
import CheckoutButton from './CheckoutButton';
//	Redux Slices
import { clearItems } from '../../../slices/cartSlice';
import { resetCartItem } from '../../../slices/cartSlice';
//	Data
import componentData from '../../../data/Cart.json';
export default function CartBody({ visability, dispatch }) {
	//Redux State Hooks
	const cartItems = useSelector((state) => state.cart);
	const content = useSelector((state) => state.language); //variables

	useEffect(() => {
		if (cartItems.length == 0 && window.localStorage.getItem('cart')) {
			dispatch(
				resetCartItem([
					...JSON.parse(window.localStorage.getItem('cart')),
				])
			);
		}
	}, []);
	return (
		<div
			className={`scrollbar-w-thin absolute top-24 z-50 mx-2 flex w-screen max-w-[340px] flex-col rounded-2xl  bg-white p-5 shadow-lg ${
				content.language == 'arabic'
					? 'desktop:left-1/2 desktop:translate-x-[-50%]'
					: 'desktop:right-1/2 desktop:translate-x-[50%]'
			}`}
			style={{
				display: visability,
				left: content.language == 'english' ? 'unset' : 0,
				right: content.language == 'english' ? 0 : 'unset',
			}}
		>
			<h1
				className=" w-full border-b p-2 font-bold"
				style={{
					textAlign: content.language == 'arabic' ? 'right' : 'left',
				}}
			>
				{content.Cart.title}
			</h1>
			{cartItems.length == 0 ? (
				<EmptyCart />
			) : (
				<>
					<div className=" max-h-72 overflow-y-auto">
						{cartItems.map((item, index) => (
							<CartItem key={index} {...item} />
						))}
					</div>
					<CheckoutButton
						dispatch={dispatch}
						clearItems={clearItems}
						language={content}
						cartItems={cartItems}
					/>
				</>
			)}
		</div>
	);
}
function EmptyCart({}) {
	return (
		<div>
			<h1 className="py-10 font-bold">Your Cart Is Empty</h1>
		</div>
	);
}
