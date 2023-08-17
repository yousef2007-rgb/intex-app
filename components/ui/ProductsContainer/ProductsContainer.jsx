import { Loading } from './Loading';
import React, { useState } from 'react';
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
}) {
	const content = useSelector((state) => state.language);

	const [sortByValue, setSortByValue] = useState('low-high');
	return isLoading ? (
		<Loading />
	) : (
		<div className=" flex flex-1 flex-col items-center ">
			<div className="my-10 flex w-full flex-col flex-wrap items-center justify-center ">
				<h1 className=" w-fit text-3xl font-bold capitalize text-blue_gray  ">
					{title}
				</h1>
				{limit == 0 ? (
					<div className="mt-5 flex items-center px-5 font-bold capitalize">
						<label htmlFor="storBySelect">sort by price:</label>
						<select
							className=" h-fit border"
							name="sortBy"
							id="storBySelect"
							onChange={(e) => setSortByValue(e.target.value)}
						>
							<option value="low-high">low - high</option>
							<option value="high-low">high - low</option>
						</select>
					</div>
				) : (
					''
				)}
			</div>
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
