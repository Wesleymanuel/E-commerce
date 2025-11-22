import axios from "axios";
import { useEffect,useState } from "react";

export const useFatchProductTypes = ({type}) => {

    const [productTypes, setProductTypes] = useState([])

    useEffect(() => {
        const fetchTypes = async () => {
            try{
                const results2 = await axios.get(`https://fakestoreapi.com/products/${type}`) 
                setProductTypes(results2.data)  
            }catch(error){
                console.log(error)
            }
        };

        fetchTypes()
    },[])

    return{
        productTypes
    }

}