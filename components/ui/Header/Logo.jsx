import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Logo({ navigation }) {
	const { lang } = useRouter().query;
	return (
		<Link
			className="mr-auto w-3/4 min-w-[100px] max-w-[150px] tablet:!mx-0"
			href={`/?lang=${lang == 'arabic' ? 'arabic' : 'english'}`}
			style={{
				marginLeft: !navigation ? 'auto' : 'unset',
			}}
		>
			<img
				className="w-full "
				src="/Assets/images/logo.png"
				alt="intex logo"
			/>
		</Link>
	);
}
