import React from 'react';

export default function index({ nid }) {
	return (
		<a
			href={
				nid
					? `https://wa.me/798642783?text=can you help with jordan.intexjo.com/Product/${nid}`
					: 'https://wa.me/798642783'
			}
			target="blank"
			className="fixed right-4 bottom-4"
		>
			<img
				className="h-16 w-16 "
				src="/Assets/images/whatsapp-logo.png"
				alt="whatsapp logo"
				title="ask for help"
			/>
		</a>
	);
}
