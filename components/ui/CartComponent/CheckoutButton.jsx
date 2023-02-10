import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { tougleCart } from '../../../slices/cartVisabilitySlice';

export default function CheckoutButton() {
	const dispatch = useDispatch();
	return (
		<Link
			className=" w-full rounded-xl border-2 border-secondery
			 bg-secondery py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-secondery"
			href={`/Checkout`}
			onClick={() => dispatch(tougleCart())}
		>
			CheckOut
		</Link>
	);
}
