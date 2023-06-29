import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { addCartItem, clearItems } from '../../slices/cartSlice';
import { addCartItems } from '../../slices/checkedoutSlice';
import WhatsappCheckout from '../../components/CheckoutPageComponents/WhatsappCheckout';
import CartItem from '../../components/CheckoutPageComponents/CartItem';
import PopUp from '../../components/ui/PopUp/PopUp';
import WhatsappButton from '../../components/ui/WhatsappButton';
import { UserInfoForm } from '../../components/CheckoutPageComponents/UserInfoForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Checkout() {
	const { lang } = useRouter().query;
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [totalPrice, setTotalPrice] = useState(0);
	const [PhoneNumberInputVisable, setPhoneNumberInputVisability] =
		useState('none');
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const touglePhoneNumberInputVisablity = () => {
		setPhoneNumberInputVisability(
			PhoneNumberInputVisable == 'none' ? 'block' : 'none'
		);
	};
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

	const handleSubmit = (e) => {
		e.preventDefault();
		const itemsArray = [];
		cartItems.map((x, index) => {
			itemsArray.push({
				discount: 0.0,
				item_id: String(x.item.nid),
				item_price: x.item.price,
				quantity: x.quantity,
			});
		});
		let itemsArrayJSON = JSON.stringify(itemsArray);
		itemsArrayJSON = itemsArrayJSON.replace(/"/g, '\\"');
		fetch(
			`https://orders.fore-site.net/media_admin/api/api_secure.php?module=orders&method=orders_submit&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&json1=[{"cart_code":"web_${Math.round(
				+new Date() * Math.random(1000)
			)}","notes":"${phone}-${name}-${location}","customer_id":"${parseInt(
				phone
			)}","order_time":${+new Date()},"status":"saved","sync_time":0,"synced":false,"total":${totalPrice},"total_items":${cartItemsNumber},"items":"${itemsArrayJSON}"}]&lang=en&username=28`,
			{
				method: 'POST',
			}
		)
			.then((response) => response.json())
			.then((json) => console.log(json))
			.catch((err) => console.error(err));
		touglePhoneNumberInputVisablity();
		dispatch(clearItems());
		window.location.href = `/Checkedout?lang=${
			lang == 'arabic' ? 'arabic' : 'english'
		}`;
	};

	return (
		<div className="flex min-h-screen w-screen flex-col">
			<Header />
			{cartItems.length != 0 ? (
				<main className=" mx-auto mt-20 flex h-fit max-w-2xl flex-1 flex-col justify-center p-5">
					<PopUp
						visability={PhoneNumberInputVisable}
						tougle={touglePhoneNumberInputVisablity}
						usingRedux={false}
						background={true}
						messege={
							<UserInfoForm
								PhoneNumberInputVisable={
									PhoneNumberInputVisable
								}
								setLocation={setLocation}
								setPhone={setPhone}
								setName={setName}
								handleSubmit={handleSubmit}
								totalPrice={totalPrice}
							/>
						}
					/>
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
								onClick={() => {
									setPhoneNumberInputVisability('block');
								}}
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
			<WhatsappButton />
		</div>
	);
}
