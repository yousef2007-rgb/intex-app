import React, { useState, useEffect } from 'react';
import Trash from '../../../public/Assets/icons/Trash';
import { removeCartItem, addCartItem } from '../../../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { tougleCart } from '../../../slices/cartVisabilitySlice';

export default function CardItem({ item, quantity }) {
	const dispatch = useDispatch();
	const language = useSelector((state) => state.language);

	const [inputValue, setInputValue] = useState(quantity);
	const handleInputChange = (e) => {
		if (e.target.value > 0) {
			setInputValue(parseInt(e.target.value));
		} else {
			alert('Value Should Be One Or Heigher');
		}
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
	}, [inputValue]);
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
					href={`/Product/${item.nid}`}
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
