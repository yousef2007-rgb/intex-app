import React from 'react';
import Link from 'next/link';
export default function Logo({}) {
	return (
		<Link className=" flex-1" href={'/'}>
			<img
				className="w-3/4 max-w-[176px] "
				src="/Assets/images/logo.png"
			/>
		</Link>
	);
}
