import React, { useState, useEffect } from 'react';
export default function WhatsappCheckout({
	dispatch,
	clearItems,
	cartItems,
	uiData,
}) {
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
				)}X${x.quantity}%20total%20price=${
					x.quantity * x.item.price * 1.5
				}`
			);
		});
	}, [cartItems]);
	return (
		<a
			className=" w-full rounded-xl border-2 border-green-500 bg-green-500 py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-green-500"
			href={`https://wa.me/798642783?text=order:\n${whatsappText}`}
			target={'blank'}
			onClick={() => dispatch(clearItems())}
		>
			{uiData.checkoutButton}
		</a>
	);
}
