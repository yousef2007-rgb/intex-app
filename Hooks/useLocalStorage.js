import { useState, useEffect } from "react";
const useLocalStorage = (key) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const storage = new Promise((resolve, reject) => {
			resolve(window.localStorage.getItem(key));
		}).then((data) => {
			setData(JSON.parse(data));
			setIsLoading(false);
		});
	}, []);
	return [data, isLoading];
};

export default useLocalStorage;
