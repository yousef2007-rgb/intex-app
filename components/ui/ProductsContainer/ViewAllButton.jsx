import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export function ViewAllButton({ number, title, content }) {
	const router = useRouter();
	const { lang } = router.query;
	return (
		<>
			<Link
				href={`/Products/${number}?title=${title}&lang=${lang}`}
				className="mx-auto my-10 rounded-xl border-2 border-transparent bg-primary px-12 py-2 font-bold text-white transition-all duration-200 ease-in-out hover:border-primary hover:bg-white hover:text-primary"
			>
				{content.language == 'arabic'
					? content.ProductContainer.viewAllButton
					: content.ProductContainer.viewAllButton}
			</Link>
		</>
	);
}
