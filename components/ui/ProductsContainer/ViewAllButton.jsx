import React from 'react';
import { useState } from 'react';
import Loading from '../Loading';
import Link from 'next/link';
export function ViewAllButton({ number, title, language, uiData }) {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<>
			<Loading visablilty={isLoading} />
			<Link
				href={`/Products/${number}?title=${title}`}
				className=" mx-auto my-12 border-2 border-transparent bg-primary px-12 py-2 font-bold text-white transition-all duration-200 ease-in-out hover:border-primary hover:bg-white hover:text-primary"
				onClick={() => setIsLoading(true)}
			>
				{language == 'arabic'
					? uiData.arabic.viewAllButton
					: uiData.english.viewAllButton}
			</Link>
		</>
	);
}
