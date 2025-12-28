import { useForm } from "@mantine/form";
import axios from "axios";

export default function useLoginForm(){
    return (
        useForm({
            initialValues : {
                email : '',
                password : ''
            },
            validate : {
                email: (v) => /^\S+@\S+$/.test(v) ? null : 'Email inválido',
        
                password: (v) => v.length < 6 ? 'Senha muito curta' : null,
            }
        })
    )
}

export const loginUserFunction = async (values) => {
    try{
        const payload = {
            email : values.email,
            password : values.password
        }

        const res = await axios.post('http://localhost:3000/users/login', payload)
        localStorage.setItem("token",res.data.jwtToken)

        return res.data
    }catch(error){
        console.log(error)
    }
}