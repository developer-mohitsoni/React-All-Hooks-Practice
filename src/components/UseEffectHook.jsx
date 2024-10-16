import { useEffect, useState } from "react";

const UseEffectHook = () => {
//   const [count, setCount] = useState(0);

  const [productList, setProductList] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data && data.products) {
        setProductList(data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <ul>
        {productList && productList.length > 0 ? (
          productList.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
};

export default UseEffectHook;
