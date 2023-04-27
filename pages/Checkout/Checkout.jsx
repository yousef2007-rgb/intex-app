import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../slices/cartSlice';
import WhatsappCheckout from '../../components/ui/CartComponent/WhatsappCheckout';
import CartItem from '../../components/ui/CheckoutComponents/CartItem';
import PopUp from '../../components/ui/PopUp/PopUp';

export default function Checkout() {
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
			`http://orders.fore-site.net/media_admin/api/api_secure.php?module=orders&method=orders_submit&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&json1=[{"cart_code":"web_${Math.round(
				+new Date() * Math.random(1000)
			)}","notes":"${phone}-${name}-${location}","customer_id":"${parseInt(
				phone
			)}","order_time":${+new Date()},"status":"saved","sync_time":0,"synced":false,"items":"${itemsArrayJSON}"}]&lang=en&username=28`,
			{
				method: 'POST',
			}
		)
			.then((response) => response.json())
			.then((json) => console.log(json))
			.catch((err) => console.error(err));
		touglePhoneNumberInputVisablity();
		dispatch(clearItems());
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
		</div>
	);
}

const UserInfoForm = ({
	PhoneNumberInputVisable,
	setPhone,
	setName,
	setLocation,
	handleSubmit,
}) => {
	return (
		<form
			className="fixed top-[50%] left-1/2 flex w-[90%] max-w-xs  -translate-y-1/2 -translate-x-1/2 flex-col rounded-xl bg-white p-5 shadow-2xl "
			style={{
				display: PhoneNumberInputVisable,
			}}
			onSubmit={handleSubmit}
		>
			<div className=" flex flex-1 flex-col justify-evenly font-bold">
				<label className="my-2" for="name">
					Enter your full name
				</label>
				<div className="flex h-8">
					<input
						className=" flex-1 border outline-none"
						type="text"
						id="name"
						name="name"
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<label className="my-2" for="phone">
					Enter your phone so we can contact you
				</label>
				<div className="flex h-8">
					<input
						className=" flex-1 border outline-none"
						type="tel"
						id="phone"
						name="phone"
						pattern="[0-9]{9}"
						onChange={(e) => setPhone(e.target.value)}
						required
					/>
				</div>
				<small>Format: 791234567</small>
				<label className="my-2" for="location">
					Enter your full location
				</label>
				<div className="flex h-8">
					<input
						className=" flex-1 border outline-none"
						type="text"
						id="location"
						name="location"
						onChange={(e) => setLocation(e.target.value)}
						required
					/>
				</div>
			</div>
			<div className="mt-5">
				<input
					className="cursor-pointer  rounded-lg bg-secondery px-5 py-1 font-bold text-white"
					value={'submite'}
					type={'submit'}
				/>
			</div>
		</form>
	);
};
