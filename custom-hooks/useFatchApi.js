import axios from "axios";
import { useEffect, useState } from "react";

export const useFatchApi = () => {
  const [product, setProduct] = useState([]);
  const productFilter = product.filter(productFilterType => productFilterType.category === "men's clothing")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get("https://fakestoreapi.com/products");
        setProduct(results.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { 
    productFilter };
};
