//React Hooks
import { useState, useEffect } from 'react';

//Redux Hooks
import { useDispatch } from 'react-redux';

//Main Component
export default function WhatsappCheckout({ clearItems, cartItems, uiData }) {
	//React Hooks
	const [whatsappText, setWhatsAppText] = useState('');
	useEffect(() => {
		if (cartItems.length != 0) {
			window.localStorage.setItem('cart', JSON.stringify(cartItems));
		}
		cartItems.map((x) => {
			setWhatsAppText(
				`%0D${whatsappText} item=%20${x.item.discription.replace(
					' ',
					'%20'
				)}X${x.quantity}%20total%20price=${x.quantity * x.item.price}`
			);
		});
	}, [cartItems]);

	//Redux Hooks
	const dispatch = useDispatch();

	return (
		<a
			className=" w-full rounded-xl border-2 border-green-500 bg-green-500 py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-green-500"
			href={`https://wa.me/798642783?text=order:\n${whatsappText}`}
			target={'blank'}
			onClick={() => dispatch(clearItems())}
		>
			Checkout Using WhatsApp
		</a>
	);
}
