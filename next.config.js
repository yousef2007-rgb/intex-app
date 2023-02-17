module.exports = {
	async headers() {
		const headers = [];
		if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
			headers.push({
				headers: [{
					key: 'x-hello',
					value: 'there',
				}],
				source: "/:path*",
			});
		}
		return headers;
	},
};
