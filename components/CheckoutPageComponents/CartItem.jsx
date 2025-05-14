//React Hooks
import { useState, useEffect } from 'react';

//Redux Hooks
import { useDispatch, useSelector } from 'react-redux';

//NextJs Components
import Link from 'next/link';

//Assets
import Trash from '../../public/Assets/icons/TrashIcon';

//Redux Actions
import { removeCartItem, addCartItem } from '../../slices/cartSlice';
import { useRouter } from 'next/router';

//Main Component
export default function CardItem({ item, quantity }) {
	//React Hooks
	const [inputValue, setInputValue] = useState(quantity);
	const sendAddToCartEvent = (item,quantity) => {
		// Your existing logic to add to cart
		// item: {
		// 	image: product.image,
		// 	discription:
		// 		product.field_item_name,
		// 	label: product.label,
		// 	price: price,
		// 	nid: product.nid,
		// },
		// Push to GTM
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
		  event: 'add_to_cart',
		  ecommerce: {
			value: item?.price,
			currency: currency,
			items: [item?.label]
		  }
		});
	  };

	useEffect(() => {
		dispatch(
			addCartItem({
				item: {
					image: item.image,
					discription: item.field_item_name,
					label: item.label,
					price: item.field_wholesale_price * 1.5,
					nid: item.nid,
				},
				quantity: inputValue,
				replace: true,
			})
		);
		sendAddToCartEvent(item,quantity)
	}, [inputValue]);

	//Redux Hooks
	const dispatch = useDispatch();

	//Component Fuctions
	const handleInputChange = (e) => {
		if (e.target.value > 0) {
			setInputValue(parseInt(e.target.value));
		} else {
			alert('Value Should Be One Or Heigher');
		}
	};
	const { lang } = useRouter().query;

	return (
		<div className=" w-max-4xl my-4 flex items-center rounded-xl border border-gray-100 p-5 font-bold shadow-xl">
			<img
				className=" aspect-square h-12 w-12 rounded-xl object-contain tablet:h-48 tablet:w-48  "
				src={item.image}
				alt={item.discription}
			/>
			<section className="mx-5 flex-1">
				<Link
					className=" flex flex-1 items-center "
					href={`/Product/${item.nid}?lang=${
						lang == 'arabic' ? 'arabic' : 'english'
					}`}
				>
					<h1 className=" whitespace-wrap text-blue_gray">
						{item.discription}
					</h1>
				</Link>
				<h2 className=" text-black">
					{item.price} x{' '}
					<input
						className=" max-w-[40px]"
						type="number"
						value={inputValue}
						onChange={handleInputChange}
					/>{' '}
					= {item.price * quantity}
					JOD
				</h2>
			</section>
			<div
				onClick={() => dispatch(removeCartItem(item.label))}
				className=" h-6 w-6 fill-blue-300 transition-all hover:fill-red-600"
			>
				<Trash />
			</div>
		</div>
	);
}
