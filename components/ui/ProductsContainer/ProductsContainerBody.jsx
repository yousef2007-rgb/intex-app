import React from 'react';
import ProductsContainer from './ProductsContainer';
import componentData from '../../../data/ProducsContainerBody.json';
import { useSelector } from 'react-redux';
import useData from '../../../hooks/useData';

export default function ProductsContainerBody({ data }) {
	const content = useSelector((state) => state.language);

	return (
		<div>
			{content.ProductContainerBody.map((item, index) => (
				<ProductsContainer
					key={index}
					title={item.title}
					number={item.number}
					limit={3}
					data={data}
					isLoading={false}
					loadingAllowed={true}
				/>
			))}
		</div>
	);
}
