//Imports
import React, { useState, useRef } from 'react';
import useFetch from '../../../../hooks/useFetch';
import ProductCard from '../../ProductsContainer/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { tougle } from '../../../../slices/searchVisabilitySlice';

//UI Component
export default function SearchBody({ visability }) {
	//React Hooks
	const [textValue, setTextValue] = useState('');
	const input = useRef(null);

	//Custom Hooks
	const [data] = useFetch(process.env.NEXT_PUBLIC_URL, 'data');

	//Redux Hooks
	const searchVisability = useSelector((state) => state.searchVisability);
	const dispatch = useDispatch();

	//Functions
	const searchFilterFunction = (x) =>
		x.label.toLowerCase().includes(textValue.toLowerCase()) ||
		x.field_item_name.toLowerCase().includes(textValue.toLowerCase());
	return (
		<div
			style={{ display: searchVisability }}
			className=" absolute top-0 left-0 flex h-fit w-screen items-start justify-center overflow-x-hidden overflow-y-scroll bg-white"
		>
			<div className=" flex h-fit w-full flex-col items-center rounded-xl bg-white  p-4">
				<div className=" my-0 flex w-full max-w-2xl flex-nowrap items-center justify-center rounded-xl border border-secondery  bg-white px-5 py-2 ">
					<input
						ref={input}
						placeholder="Search for product"
						className=" fex-1 h-full w-full font-bold text-black outline-none"
						onChange={() => setTextValue(input.current.value)}
					/>
				</div>
				<div
					onClick={() => dispatch(tougle())}
					className="mt-5 flex max-h-[89vh]  w-full flex-row flex-wrap justify-evenly gap-20 overflow-auto"
				>
					{textValue != ''
						? data.data.res
								.filter(searchFilterFunction)
								.map((product, index) => (
									<ProductCard
										key={index}
										label={product.label}
										discription={product.field_item_name}
										image={product.image}
										secondImage={product.images[0]}
										price={{
											specialPrice:
												product.field_special_price,
											listPrice:
												product.field_online_price
													? product.field_online_price
													: product.field_wholesale_price *
													  1.5,
										}}
										nid={product.nid}
									/>
								))
						: ''}
				</div>
			</div>
		</div>
	);
}
