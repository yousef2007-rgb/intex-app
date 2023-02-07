import React, { useState } from 'react';
import { addCartItem } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

export function ProductDetails({ product, uiData }) {
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(1);
	return (
		<div className=" mx-auto flex w-full max-w-6xl flex-wrap items-center justify-evenly border-b">
			<img
				className="aspect-square h-fit w-full max-w-lg object-contain tablet:w-1/2 tablet:min-w-[400px]"
				src={product.image}
				itemProp="product image"
			/>

			<article className="h-fit w-full p-5 font-bold tablet:ml-4 tablet:w-1/2">
				<div>
					<h1
						itemProp="discription"
						className=" my-2 text-3xl text-blue_gray"
					>
						{product.field_item_name}
					</h1>
					<h2
						className="  w-full border-b pb-10 font-normal capitalize"
						itemProp="item id"
					>
						{uiData.itemNumber}: {product.label}
					</h2>
				</div>
				<div className=" flex w-full flex-col">
					<p
						itemProp="price"
						className=" my-5 ml-auto text-2xl capitalize"
					>
						{product.field_wholesale_price * 1.5} JOD
					</p>

					<div className=" mx-auto flex w-full text-center shadow-md tablet:mr-0 tablet:w-fit">
						<button
							onClick={() => {
								if (counter > 1) {
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
											discription:
												product.field_item_name,
											label: product.label,
											price:
												product.field_wholesale_price *
												1.5,
											nid: product.nid,
										},
										quantity: counter,
									})
								);
							} else {
								alert('Set A Quantity Please!');
							}
						}}
						className=" my-5 ml-auto w-full rounded-xl border-2 border-transparent bg-secondery px-20 py-2 font-bold uppercase text-white hover:border-secondery hover:bg-white hover:text-secondery tablet:w-fit"
					>
						{uiData.addToCartButton}
					</button>
				</div>
			</article>
		</div>
	);
}
