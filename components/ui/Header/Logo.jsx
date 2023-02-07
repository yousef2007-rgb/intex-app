import React from 'react';
import Link from 'next/link';
export default function Logo({}) {
	return (
		<Link href={'/'}>
			<img
				className=" mx-3 w-full max-w-[176px] "
				src="/Assets/images/logo.png"
			/>
		</Link>
	);
}
