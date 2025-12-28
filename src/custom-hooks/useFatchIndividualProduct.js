import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export  const useFatchIndividualProduct = () => {

    const [individualProduct, setIndividualProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fatchProduct = async () => {
            try{
                const result = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setIndividualProduct(result.data)
            }catch(error){
                console.log(error)
            }
        };
        fatchProduct()
    },[id])

    return{
        individualProduct
    }

}