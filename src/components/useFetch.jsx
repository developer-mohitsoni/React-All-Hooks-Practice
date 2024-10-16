import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      const data = await response.json();

      if (data) {
        setLoading(false);
        setData(data);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching products:", error);
    }
  };

  // Fix: Add dependency array to prevent infinite loop
  useEffect(() => {
    fetchData();
    // Only re-run fetchData if `url` or `options` change
  }, []);

  return { loading, data };
};

export default useFetch;
