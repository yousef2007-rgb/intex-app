import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../slices/cartSlice';
import { currency } from '../../constants';

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



	useEffect(() => {
		if (!product) return;
	  
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
		  event: 'view_item',
		  ecommerce: {
			items: [
			  {
				item_id: [product?.label],
				
				// ... other product fields
			  },
			],
		  },
		});
	  }, [product?.label]);

	const sendAddToCartEvent = (item,quantity) => {

		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
		  event: 'add_to_cart',
		  ecommerce: {
			items: [item?.label]
		  }
		});
	  };

	return (
		<article
			style={{
				textAlign: content.language == 'arabic' ? 'right' : 'left',
			}}
			className="h-fit w-full p-5 font-bold tablet:ml-4 tablet:w-1/2"
		>
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
			
			{
			
			product.field_packing_description === 'out-of-stock'?

			<div className='flex flex-row items-center'>
						<span className="mx-1 my-2 text-l  text-gray-300 items-end">
								Availability: 
							</span>
							<h1 className=" my-2 text-2xl font-bold capitalize text-gray-300">
			out of stock
		</h1>
						</div>
			
			:product.field_packing_description != 'comming-soon' ? (
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
								<span>{content.ProductPage.listPrice}: </span>
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
					
					{product.status == 0 ? (
						<div className='flex flex-row items-center'>
						<span className="mx-1 my-2 text-l  text-gray-400 items-end">
								Availability: 
							</span>
						<h1 className=" my-2 text-2xl font-bold capitalize text-gray-500">
							out of stock
						</h1>
						</div>
					) : (
						<>
						<div className='flex flex-row items-center justify-end'>
						<span className="mx-1 my-2 text-xl  text-gray-400 ">
								Availability: 
							</span>
						<h1 className=" my-2 text-2xl font-bold capitalize text-green-500 ">
							in stock
						</h1>
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
								<p className=" flex-1 py-2 tablet:px-24">
									{counter}
								</p>

								<button
									onClick={() => setCounter(counter + 1)}
									className=" rounded-r-xl bg-slate-800 py-2 px-3 font-bold text-white"
								>
									+
								</button>
							</div>

							<button
								className=" my-5 ml-auto w-full rounded-xl border-2 border-transparent bg-secondery py-2 font-bold uppercase text-white hover:border-secondery hover:bg-white hover:text-secondery tablet:max-w-[260px]"
								onClick={() => {
									if (counter != 0) {
										sendAddToCartEvent(product,counter)
										dispatch(
											addCartItem({
												item: {
													image: product.image,
													discription:
														product.field_item_name,
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
							>
								{content.ProductPage.addToCartButton}
							</button>


						

							<a
								className=" mb-5  ml-auto w-full rounded-xl border-2 border-transparent bg-green-400 py-2 text-center font-bold uppercase text-white hover:border-green-400 hover:bg-white hover:text-green-400 tablet:max-w-[260px]"
								href={`https://wa.me/798642783?text=can you help with jordan.intexjo.com/Product/${product.nid}`}
								target="blank"
							>
								{content.ProductPage.help}
							</a>
						</>
					)}
				</div>
			) : (
				<div className="flex w-full">
					<span className="w-full rounded-md border-2 border-green-500 py-2 text-center text-xl text-2xl capitalize text-green-500">
						comming soon
					</span>
				</div>
			)}
		</article>
	);
}
