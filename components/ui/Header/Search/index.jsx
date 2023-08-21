import React, { useState, useRef } from 'react';
import SearchIcon from '../../../../public/Assets/icons/SearchIcon';
import useFetch from '../../../../hooks/useFetch';
import Close from '../../../../public/Assets/icons/CloseIcon';
import categories from '../../../../data/content.json';

export default function Search({ mobile }) {
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

	const resultDev = useRef(null);

	const handleKeyPress = (e) => {
		if (e.key == 'Enter') {
			const containerElement = resultDev.current;

			const firstChild = containerElement.querySelector(':first-child');

			if (firstChild) {
				firstChild.click();
			}
		}
	};
	console.log('mobile is ' + mobile);
	return (
		<div
			className={`relative z-30 flex w-full flex-1 items-center rounded-xl border-2 px-5 py-2 tablet:mx-auto `}
		>
			<input
				className="h-full flex-1 font-bold text-black outline-none"
				type="text"
				placeholder="Search for product"
				ref={input}
				onChange={() => setTextValue(input.current.value)}
				onKeyDown={handleKeyPress}
			/>
			<button className="h-full w-5 fill-gray-500" onClick={claerText}>
				{textValue == '' ? <SearchIcon /> : <Close />}
			</button>

			{textValue != '' ? (
				<div
					className="absolute top-full left-0 flex max-h-[70vh] w-full translate-y-2 flex-col overflow-auto rounded-3xl bg-white py-5 text-left shadow-2xl  "
					ref={resultDev}
				>
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
										<div className="flex flex-1 items-center">
											<span className="mr-2 max-w-lg">
												{product.field_item_name}
											</span>
											<span className="mr-2 h-fit text-secondery">
												{product.label}
											</span>
										</div>
										<img
											className="ml-auto aspect-square w-16 object-contain"
											src={product.image}
											alt={`${product.field_item_name} ${product.label}`}
										/>
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
										<div className="flex flex-1 text-left">
											<span className="mr-2">
												{product.field_item_name}
											</span>
											<span className="mr-2 text-secondery">
												{product.label}
											</span>
										</div>

										<img
											className="ml-auto aspect-square w-16 object-contain"
											src={product.image}
											alt={`${product.field_item_name} ${product.label}`}
										/>
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
