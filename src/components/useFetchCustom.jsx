import useFetch from "./useFetch";

const useFetchCustom = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products", {});

  console.log(data, loading);

  if (loading) {
    return <h1>Loading data ! Please wait...</h1>;
  }

  return (
    <div>
      <h1>UseFetch Hook</h1>
      <ul>
        {data && data.products && data.products.length > 0 ? (
          data.products.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <h1>No Data</h1>
        )}
      </ul>
    </div>
  );
};

export default useFetchCustom;
