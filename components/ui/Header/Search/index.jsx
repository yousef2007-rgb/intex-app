import React, { useState, useRef } from 'react';
import SearchIcon from '../../../../public/Assets/icons/SearchIcon';
import useFetch from '../../../../hooks/useFetch';
import ProductCard from '../../ProductsContainer/ProductCard';
import Link from 'next/link';
import Close from '../../../../public/Assets/icons/CloseIcon';
import categories from '../../../../data/content.json';
import PopUp from './../../PopUp/PopUp';
export default function Search() {
	const [textValue, setTextValue] = useState('');
	const input = useRef(null);
	const claerText = () => {
		if (textValue != '') {
			input.current.value = '';
			setTextValue('');
		}
	};
	const goToPage = (link) => {
		claerText();
		if (link) {
			window.location.href = link;
		}
	};
	//Custom Hooks
	const [data] = useFetch(process.env.NEXT_PUBLIC_URL, 'data');
	const [dataAr] = useFetch(process.env.NEXT_PUBLIC_URL_AR, 'data');

	const searchFilterFunctionCategories = (x) =>
		x.title.toLowerCase().includes(textValue.toLowerCase()) ||
		x.number.includes(textValue) ||
		x.keywords.toLowerCase().includes(textValue.toLowerCase());

	const searchFilterFunction = (x) =>
		(x.label.toLowerCase().includes(textValue.toLowerCase()) ||
			x.field_item_name
				.toLowerCase()
				.includes(textValue.toLowerCase())) &&
		x.status == 1;
	return (
		<div className="relative mx-auto hidden max-w-[60vw] flex-1 items-center rounded-full border-2  px-5 py-2 tablet:flex">
			<input
				className="h-full flex-1 font-bold text-black outline-none"
				type="text"
				placeholder="Search for product"
				ref={input}
				onChange={() => setTextValue(input.current.value)}
			/>
			<button className="h-full w-5 fill-gray-500" onClick={claerText}>
				{textValue == '' ? <SearchIcon /> : <Close />}
			</button>

			{textValue != '' ? (
				<div className="absolute top-full left-0 flex max-h-[70vh] w-full translate-y-2 flex-col overflow-auto rounded-3xl bg-white py-5 text-left shadow-2xl  ">
					{textValue != ''
						? categories.en.ProductContainerBody.filter(
								searchFilterFunctionCategories
						  ).map((products, index) => (
								<button
									className="flex w-full items-center py-2 px-5 text-left font-bold capitalize hover:bg-slate-200 "
									onClick={() =>
										goToPage(
											`/Products/${products.number}/?title=${products.title}&lang=english`
										)
									}
									key={index}
								>
									<span className="mr-2 w-4">
										<SearchIcon />
									</span>
									<span className="flex-1">
										{products.title}
									</span>
									<span className="text-secondery">
										{products.number}
									</span>
								</button>
						  ))
						: ''}
					{textValue != ''
						? categories.ar.ProductContainerBody.filter(
								searchFilterFunctionCategories
						  ).map((products, index) => (
								<button
									className="flex w-full items-center py-2 px-5 text-left font-bold capitalize hover:bg-slate-200 "
									onClick={() =>
										goToPage(
											`/Products/${products.number}/?title=${products.title}&lang=arabic`
										)
									}
									key={index}
								>
									<span className="mr-2 w-4">
										<SearchIcon />
									</span>
									<span className="flex-1">
										{products.title}
									</span>
									<span className="text-secondery">
										{products.number}
									</span>
								</button>
						  ))
						: ''}
					{textValue != ''
						? data.data.res
								.filter(searchFilterFunction)
								.map((product, index) => (
									<button
										className="flex w-full items-center py-2 px-5 text-left font-bold capitalize hover:bg-slate-200 "
										onClick={() =>
											goToPage(
												`/Product/${product.nid}?lang=english`
											)
										}
										key={index}
									>
										<span className="mr-2 w-4">
											<SearchIcon />
										</span>
										<span className="mr-2 flex-1">
											{product.field_item_name}
										</span>
										<span className="text-secondery">
											{product.label}
										</span>
									</button>
								))
						: ''}
					{textValue != ''
						? dataAr.data.res
								.filter(searchFilterFunction)
								.map((product, index) => (
									<button
										className="flex w-full items-center py-2 px-5 text-left font-bold capitalize hover:bg-slate-200 "
										onClick={() =>
											goToPage(
												`/Product/${product.nid}/?lang=arabic`
											)
										}
										key={index}
									>
										<span className="mr-2 w-4">
											<SearchIcon />
										</span>
										<span className="mr-2 flex-1">
											{product.field_item_name}
										</span>
										<span className="text-secondery">
											{product.label}
										</span>
									</button>
								))
						: ''}
				</div>
			) : (
				''
			)}
		</div>
	);
}
