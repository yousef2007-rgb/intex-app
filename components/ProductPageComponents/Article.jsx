import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../slices/cartSlice';

export function Article({ content, product }) {
	const [counter, setCounter] = useState(1);
	const price = product.field_special_price
		? product.field_special_price
		: product.field_online_price
		? product.field_online_price
		: product.field_wholesale_price * 1.5;
	const listPrice = product.field_online_price
		? product.field_online_price
		: product.field_wholesale_price * 1.5;
	const discount = Math.round(
		100 -
			(product.field_special_price /
				(product.field_online_price
					? product.field_online_price
					: product.field_wholesale_price * 1.5)) *
				100
	);
	const dispatch = useDispatch();

	return (
		<article className="h-fit w-full p-5 font-bold tablet:ml-4 tablet:w-1/2">
			<div>
				<h1
					itemProp="discription"
					className="my-2 text-3xl capitalize text-blue_gray"
				>
					{product.field_item_name}
				</h1>
				<h2
					className="  w-full font-normal capitalize"
					itemProp="item id"
				>
					{content.ProductPage.itemNumber}: {product.label}
				</h2>
				<div
					className=" my-2 list-disc border-b px-3 pb-10 [&>*]:list-disc"
					dangerouslySetInnerHTML={{
						__html: product.field_details,
					}}
				></div>
			</div>
			<div className=" flex w-full flex-col">
				<p
					itemProp="price"
					className=" my-2 ml-auto text-2xl capitalize"
				>
					<span className="text-2xl font-bold text-red-500">
						{product.field_special_price
							? '-' + discount + '%'
							: ''}
					</span>{' '}
					{price + 'JOD'}
				</p>
				{/* <p>{product.field_wholesale_price}JOD</p> */}
				<div className=" mb-2 ml-auto flex text-lg capitalize opacity-50">
					{product.field_special_price ? (
						<>
							<span>List Price: </span>
							<p
								itemProp="price"
								style={{
									textDecoration: 'line-through',
								}}
							>
								{listPrice + 'JOD'}
							</p>
						</>
					) : (
						''
					)}
				</div>
				<div className=" mx-auto flex w-full rounded-xl text-center shadow-md tablet:mr-0 tablet:w-fit">
					<button
						onClick={() => {
							if (counter > 0) {
								setCounter(counter - 1);
							}
						}}
						className=" rounded-l-xl bg-slate-800 p-2 px-3 font-bold text-white"
					>
						-
					</button>
					<p className=" flex-1 py-2 tablet:px-24">{counter}</p>

					<button
						onClick={() => setCounter(counter + 1)}
						className=" rounded-r-xl bg-slate-800 py-2 px-3 font-bold text-white"
					>
						+
					</button>
				</div>
				<button
					onClick={() => {
						if (counter != 0) {
							dispatch(
								addCartItem({
									item: {
										image: product.image,
										discription: product.field_item_name,
										label: product.label,
										price: price,
										nid: product.nid,
									},
									quantity: counter,
									replace: false,
								})
							);
						} else {
							alert('Set A Quantity Please!');
						}
					}}
					className=" my-5 ml-auto w-full rounded-xl border-2 border-transparent bg-secondery px-20 py-2 font-bold uppercase text-white hover:border-secondery hover:bg-white hover:text-secondery tablet:w-fit"
				>
					{content.ProductPage.addToCartButton}
				</button>
			</div>
		</article>
	);
}
