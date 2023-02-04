import React from 'react';
export function WhatsappCheckout({
	whatsappText,
	dispatch,
	clearItems,
	uiData,
}) {
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
