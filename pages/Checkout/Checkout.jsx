import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../slices/cartSlice';
import WhatsappCheckout from '../../components/ui/CartComponent/WhatsappCheckout';
import CartItem from '../../components/ui/CheckoutComponents/CartItem';

export default function Checkout() {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let num = 0;
		for (let i = 0; i < cartItems.length; i++) {
			num =
				num +
				parseFloat(cartItems[i].item.price * cartItems[i].quantity);
		}
		setTotalPrice(num);
	}, [cartItems]);

	const [cartItemsNumber, setCartItemsNumber] = useState(0);
	useEffect(() => {
		let num = 0;
		for (let i = 0; i < cartItems.length; i++) {
			num = num + cartItems[i].quantity;
		}
		setCartItemsNumber(num);
	}, [cartItems]);

	return (
		<div className="flex min-h-screen w-screen flex-col">
			<Header />
			{cartItems.length != 0 ? (
				<main className=" mx-auto mt-20 flex h-fit max-w-2xl flex-1 flex-col justify-center p-5">
					<div className=" flex w-full  flex-col justify-evenly">
						{cartItems.map((item, index) => (
							<CartItem key={index} {...item} />
						))}
						<h1 className=" mx-auto my-6 font-bold capitalize tablet:mx-0">
							total price: {totalPrice}JOD
						</h1>
					</div>

					<div className=" flex w-full flex-col items-center justify-evenly font-bold tablet:ml-auto tablet:w-fit tablet:flex-row">
						<div className="my-4 flex  max-w-xs">
							<button
								className=" w-full rounded-xl border-2 border-secondery bg-secondery py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-secondery"
								onClick={() =>
									fetch(
										'http://orders.fore-site.net/media_admin/api/api_secure.php?method=orders_submit&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&json1=[{"cart_code":"test_web_1","customer_id":"902930432","order_time":1675528715669,"status":"saved","sync_time":0,"synced":false,"total":27,"total_items":1,"items":"[{"discount":0.0,"id":22,"item_id":"2620","item_price":27.0,"quantity":1.0}]"}]&lang=en&username=28',
										{
											method: 'POST',
											body: '',
											headers: {
												'Content-type':
													'application/json; charset=UTF-8',
											},
										}
									)
										.then((response) => response.json())
										.then((json) => console.log(json))
										.catch((err) => console.error(err))
								}
							>
								Stay Here and CheckOut
							</button>
						</div>
						<span className="mx-2">or</span>

						<div className="my-4 flex  max-w-xs">
							<WhatsappCheckout
								clearItems={clearItems}
								cartItems={cartItems}
							/>
						</div>
					</div>
				</main>
			) : (
				<h1 className=" my-auto flex h-[70vh] items-center justify-center font-bold capitalize">
					{'you have no items in your cart :('}
				</h1>
			)}
			<Footer />
		</div>
	);
}
