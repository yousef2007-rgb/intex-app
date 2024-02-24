import React from 'react';
import ProductsContainer from '../ui/ProductsContainer/ProductsContainer';
import { useSelector } from 'react-redux';
import useContent from '../../hooks/useContent';

export default function ProductsContainerBody({ data }) {
	const content = useSelector((state) => state.language);

	return (
		<div className="max-w-[1200px] mx-auto">
			{content.ProductContainerBody.map((item, index) => (
				<ProductsContainer
					key={index}
					title={item.title}
					number={item.number}
					limit={4}
					data={data}
					isLoading={false}
					loadingAllowed={true}
				/>
			))}
		</div>
	);
}
