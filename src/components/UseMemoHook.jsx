import { useEffect, useMemo, useState } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(false);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data && data.products) {
        setData(data.products);
      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  //   console.log(data);

  const filterProductsByPrice = (getProducts) => {
    console.log("This is getting called");

    return getProducts && getProducts.length > 0
      ? getProducts.filter((item) => item.price > 50)
      : [];
  };

  const memorizeFilterProductByPrice = useMemo(
    () => filterProductsByPrice(data),
    [data]
  );

  return (
    <>
      <div>
        <h1>UseMemoHook</h1>
        <ul>
          {memorizeFilterProductByPrice.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
        <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
        <h2>{theme ? "light" : "Dark"}</h2>
      </div>
    </>
  );
};

export default UseMemoHook;
