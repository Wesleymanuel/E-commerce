import './Login.css'
import { TextInput, PasswordInput, Button } from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import useLoginForm, { loginUserFunction } from '../custom-hooks/useLoginUser'
const Login = () => {

    const form = useLoginForm()
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        try {
        const data = await loginUserFunction(values);

        if (data.jwtToken) {
            navigate("/");
        }
        } catch (err) {
        console.log("Login inválido", err);
        }
    }

  return (
    <main className='login-main'>
        <main className='login-container'>
            <div className='login-form'>
                <div style={{width: '70%'}}>
                    <h1>BEM-VINDO DE VOLTA</h1>
                    <p>faca ja login para poder ter acessos aos</p>
                    <p>nossos produtos e ofertas!!</p>
                </div>
                <form className='forms-login-options' onSubmit={form.onSubmit(handleSubmit)}>
                    <div>
                        <TextInput label='Email: ' width={'100%'} {...form.getInputProps("email")}/>
                        <div>
                            <PasswordInput label='Password: ' width={'100%'} {...form.getInputProps("password")}/>
                            <div>
                                <label>
                                    <input type="checkbox" />
                                    Forgot you password?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: "column", justifyContent: 'space-between', alignItems: 'center', height: '100px'}}>
                        <div style={{width: '100%'}}>
                            <Button type='submit' style={{width: '100%'}}>
                                Sing in
                            </Button>
                        </div>
                        <div style={{marginBottom: '10px'}}>
                            <p>don't have cont? <Link to={'/register'} >sing up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='login-image'>
                <div className='image-login-container'>
                    <img src="https://i.pinimg.com/736x/b1/26/ba/b126ba964fc6ccc01d52f22a749da049.jpg" alt="imagem" style={{borderRadius: '20px'}}/>
                </div>
            </div>
        </main>
    </main>
  )
}

export default Login