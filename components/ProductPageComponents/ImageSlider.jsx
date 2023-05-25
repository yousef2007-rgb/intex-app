import { React, useState } from 'react';
export const ImageSlider = ({ product }) => {
	const slides = [product.image, ...product.images];
	const [activeSlide, setActiveSlide] = useState(0);

	const handleSlideButtonClick = (index) => {
		setActiveSlide(index);
	};

	return (
		<div className="w-full max-w-lg">
			<div className="relative h-96 w-full max-w-lg">
				{slides.map((slide, index) => (
					<div
						key={index + 1}
						className={`absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-500 ease-in-out`}
						style={{
							opacity: index === activeSlide ? 1 : 0,
						}}
					>
						<img
							src={slide}
							alt={`Slide ${index}`}
							className="h-full w-full rounded-xl object-contain"
							itemProp="image"
						/>
					</div>
				))}
			</div>
			<div className="my-4 flex flex-wrap justify-evenly">
				{slides.map((slide, index) => (
					<button
						className="m-1"
						key={index}
						onMouseEnter={() => handleSlideButtonClick(index)}
					>
						<img
							className="h-20 w-20 rounded-xl border-2  object-contain"
							style={{
								borderColor:
									index === activeSlide ? 'black' : 'silver',
							}}
							src={slide}
							alt={`Thumbnail ${index}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
};
