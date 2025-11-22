import axios from "axios";
import { useEffect, useState } from "react";

export const useFatchApi = () => {
  const [product, setProduct] = useState([]);
  const productFilter = product.filter(productFilterType => productFilterType.category === "men's clothing")
  const productFilterEletronick = product.filter(productFilterType => productFilterType.category === "electronics")
  const productFilterWomans = product.filter(productFilterType => productFilterType.category === "jewelery")
  const productFilterWomansCloates = product.filter(productFilterType => productFilterType.category === "women's clothing")



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
    productFilterEletronick,
    productFilter,
    productFilterWomans,
    productFilterWomansCloates
   };
};
