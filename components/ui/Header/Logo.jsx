import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Logo({}) {
	const { lang } = useRouter().query;
	return (
		<Link
			className="mx-auto w-3/4 min-w-[100px] max-w-[150px] tablet:mx-0"
			href={`/?lang=${lang == 'arabic' ? 'arabic' : 'english'}`}
		>
			<img
				className="w-full "
				src="/Assets/images/logo.png"
				alt="intex logo"
			/>
		</Link>
	);
}
