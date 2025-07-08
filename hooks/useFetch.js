import React, { useEffect, useState } from "react";
const useFetch = (url, key) => {
	const [data, setData] = useState({ data: { res: [] } });
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		console.log("url in useFetch "+url)
		fetch(url, {
			method: "GET",
			headers: {
				accept: "applictaion/json",
			},
		})
			.then((res) => res?.json())
			.then((data) => {
				setIsLoading(false);
				setData(data);
			}).catch(err => console.log(err));
	}, []);
	return [data, isLoading];
};
export default useFetch;
