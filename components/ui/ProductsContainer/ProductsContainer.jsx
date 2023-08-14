import { Loading } from './Loading';
import React from 'react';
import { ProductsCards } from './ProductsCards';
import { ViewAllButton } from './ViewAllButton';
import uiData from '../../../data/ProductContainer.json';
import { useSelector } from 'react-redux';

export default function ProductsContainer({
	title,
	number,
	limit,
	data,
	currentProduct,
	isLoading,
	loadingAllowed,
	sortByValue,
}) {
	const content = useSelector((state) => state.language);
	return isLoading ? (
		<Loading />
	) : (
		<div className=" flex flex-1 flex-col items-center ">
			<h1 className=" my-10 mx-auto w-fit text-3xl font-bold capitalize text-blue_gray  ">
				{title}
			</h1>

			<ProductsCards
				data={data}
				currentProduct={currentProduct}
				loadingAllowed={loadingAllowed}
				number={number}
				limit={limit}
				sortByValue={sortByValue}
			/>
			{limit != 0 ? (
				<ViewAllButton
					number={number}
					title={title}
					content={content}
				/>
			) : (
				''
			)}
		</div>
	);
}
