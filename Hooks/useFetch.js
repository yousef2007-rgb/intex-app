import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        useLocalStorage("data", data);
      });
  }, []);
  return [data, isLoading];
};

export default useFetch;
