const ProductMetaData = (discription, label, price) => {
	return (
		<>
			<meta itemprop="description" content={discription + label} />
			<meta name="rating" content="4.5" />
			<meta name="reviewCount" content="10" />
			<div
				itemProp="brand"
				itemType="https://schema.org/Brand"
				itemScope=""
			></div>
			<meta itemProp="name" content={discription + label}></meta>
			<div
				itemProp="offers"
				itemtype="https://schema.org/Offer"
				itemscope=""
			>
				<meta
					itemProp="itemCondition"
					content="https://schema.org/NewCondition"
				/>
				<meta itemProp="priceCurrency" content="JOD" />
				<meta
					itemProp="price"
					content={
						price.specialPrice
							? price.specialPrice
							: price.listPrice
					}
				/>
				<link
					itemProp="availability"
					href="https://schema.org/InStock"
				/>
			</div>
		</>
	);
};

export default ProductMetaData;
