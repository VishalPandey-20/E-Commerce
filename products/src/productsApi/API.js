import axios from "axios";

const products = async () => {
  const result = await axios.get("https://dummyjson.com/products");
  return result.data.products;
};

export default products;
