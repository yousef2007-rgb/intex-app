//Imports Region
//	React Hooks
import React, { useEffect, useState } from 'react';
//	Redux Hooks
import { useDispatch, useSelector } from 'react-redux';
//	React Components
import CartItem from './CartItem';
import { WhatsappCheckout } from './WhatsappCheckout';
import { Background } from './Background';
//	Redux Slices
import { clearItems } from '../../../slices/cartSlice';
import { resetCartItem } from '../../../slices/cartSlice';
import { tougleCart } from '../../../slices/cartVisabilitySlice';
//	Data
import componentData from '../../../data/Cart.json';
//Ui Component Region
function CartContainer({ cart }) {
	//Redux State Hooks
	const visability = useSelector((state) => state.cartVisability);
	const cartItems = useSelector((state) => state.cart);
	const language = useSelector((state) => state.language);
	//Functions
	const dispatch = useDispatch();
	//variables
	const uiData =
		language == 'arabic' ? componentData.arabic : componentData.english;
	//React Hooks
	const [whatsappText, setWhatsAppText] = useState('');
	useEffect(() => {
		if (cartItems.length == 0 && window.localStorage.getItem('cart')) {
			dispatch(
				resetCartItem([
					...JSON.parse(window.localStorage.getItem('cart')),
				])
			);
		}
	}, []);
	useEffect(() => {
		if (cartItems.length != 0) {
			window.localStorage.setItem('cart', JSON.stringify(cartItems));
		}
		cart.map((x) => {
			setWhatsAppText(
				`%0D${whatsappText} item=%20${x.item.discription.replace(
					' ',
					'%20'
				)}X${x.quantity}%20total%20price=${
					x.quantity * x.item.price * 1.5
				}`
			);
		});
	}, [cartItems]);
	return (
		<>
			<Background
				visability={visability}
				dispatch={dispatch}
				tougleCart={tougleCart}
			/>
			<div
				className={` absolute top-32  mx-2  flex w-screen max-w-[340px] flex-col rounded-2xl  bg-white p-5 shadow-lg tablet:right-1/2 tablet:translate-x-[50%]`}
				style={{
					display: visability,
					left: language == 'english' ? 'unset' : 0,
					right: language == 'english' ? 0 : 'unset',
				}}
			>
				<h1
					className=" w-full border-b p-2 font-bold"
					style={{
						textAlign:
							language == 'arabic' ? 'right' : 'left',
					}}
				>
					{uiData.title}
				</h1>
				{cart.length == 0 ? (
					<div>
						<h1 className="py-10 font-bold">
							Your Cart Is Empty
						</h1>
					</div>
				) : (
					<>
						{cart.map((item, index) => (
							<CartItem key={index} {...item} />
						))}

						<WhatsappCheckout
							whatsappText={whatsappText}
							dispatch={dispatch}
							clearItems={clearItems}
							uiData={uiData}
						/>
					</>
				)}
			</div>
		</>
	);
}
CartContainer.displayName = 'cart';

export default CartContainer;
