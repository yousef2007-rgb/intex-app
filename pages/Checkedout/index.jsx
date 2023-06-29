import React, { use, useEffect, useState } from 'react';
import Footer from '../../components/ui/Footer/Footer';
import Header from '../../components/ui/Header/Header';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import CartItem from '../../components/CheckoutPageComponents/CartItem';
import { clearItems } from '../../slices/cartSlice';

const ThankYouPage = () => {
	const [checkedoutItems, setCheckedoutItems] = useState([]);
	const { lang } = useRouter().query;
	const dispatch = useDispatch();
	useEffect(() => {
		setCheckedoutItems(
			JSON.parse(window.localStorage.getItem('checkedout'))
		);
		dispatch(clearItems());
	}, []);
	return (
		<main className="mt-20 flex min-h-screen flex-col">
			<Header />
			<div className="flex flex-1 flex-col items-center justify-center bg-gray-100 px-3">
				<div className="mx-auto my-10  max-w-2xl bg-white p-8 shadow-md">
					<h2 className="mb-4 text-2xl font-bold">
						Thank You for Your Purchase!
					</h2>
					<p className="text-gray-700">
						We appreciate your business and your support. Your order
						has been successfully processed.
					</p>
					<Link
						className="mt-6 font-bold text-green-400 underline"
						href={`/?lang=${
							lang == 'arabic' ? 'arabic' : 'english'
						}`}
					>
						continue shopping
					</Link>
					<h1 className="my-4 text-2xl font-bold capitalize">
						you have orderd:
					</h1>
					{checkedoutItems.map((item, index) => (
						<div className=" w-max-4xl my-4 flex items-center rounded-xl border border-gray-100 p-5 font-bold shadow-xl">
							<img
								className=" aspect-square h-12 w-12 rounded-xl object-contain tablet:h-48 tablet:w-48  "
								src={item.item.image}
								alt={item.item.discription}
							/>
							<section className="mx-5 flex-1">
								<Link
									className=" flex flex-1 items-center "
									href={`/Product/${item.item.nid}?lang=${
										lang == 'arabic' ? 'arabic' : 'english'
									}`}
								>
									<h1 className=" whitespace-wrap text-blue_gray">
										{item.item.discription}
									</h1>
								</Link>
								<h2 className=" text-black">
									{item.item.price} x {item.quantity} ={' '}
									{item.item.price * item.quantity}
									JOD
								</h2>
							</section>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</main>
	);
};

export default ThankYouPage;
