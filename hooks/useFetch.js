import React, { useEffect, useState } from "react";
const useFetch = (url, key) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: {
				accept: "applictaion/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(false);
				setData(data);
				window.localStorage.setItem("data", JSON.stringify(data));
			}).catch(err => console.log(err));
	}, []);
	return [data, isLoading];
};
export default useFetch;
