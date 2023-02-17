module.exports = {
	async headers() {
		const headers = [];
		if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
			headers.push({
				headers: [],
				source: "/:path*",
			});
		}
		return headers;
	},
};
