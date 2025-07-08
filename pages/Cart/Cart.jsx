import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header/Header';
import Footer from '../../components/ui/Footer/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../slices/cartSlice';
import WhatsappCheckout from '../../components/CheckoutPageComponents/WhatsappCheckout';
import CartItem from '../../components/CheckoutPageComponents/CartItem';
import PopUp from '../../components/ui/PopUp/PopUp';
import WhatsappButton from '../../components/ui/WhatsappButton';

import { useRouter } from 'next/router';
import { currency } from '../../constants';
export default function Cart() {
	const { lang } = useRouter().query;
	const router = useRouter()
	const cartItems = useSelector((state) => state.cart);
	
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


	
	const sendPurchaseData = (items,value) => {

		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
		  event: 'purchase',
		  value:value,
		  currency:currency,
		  ecommerce: {
			items: items
		  }
		});
	  };

	

	return (
		<div className="flex min-h-screen w-screen flex-col overflow-y-auto">
			<Header />
			{
			
			cartItems.length != 0 ? (
				<main className=" mx-auto  flex h-fit max-w-2xl flex-1 flex-col justify-center p-5 tablet:mt-32">
					{/* <PopUp
						visability={PhoneNumberInputVisable}
						tougle={touglePhoneNumberInputVisablity}
						usingRedux={false}
						background={true}
						messege={
							
						}
					/> */}
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
									const selectedLang = lang === 'arabic' ? 'arabic' : 'english'
									router.push(`/Checkout?lang=${selectedLang}`)
									console.log("items in checkout "+JSON.stringify(cartItems))
									const items=cartItems.map(itemData=>itemData?.item?.label)
									sendPurchaseData(items,totalPrice)
								}}
							>
								CheckOut
							</button>
						</div>
						{/* <span className="mx-2">or</span>

						<div className="my-4 flex  max-w-xs">
							<WhatsappCheckout
								clearItems={clearItems}
								cartItems={cartItems}
								sendPurchaseTrack={()=>
									
									{const items=cartItems.map(item=>item.label)
									sendPurchaseData(items,totalPrice)}}
							/>
						</div> */}
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
