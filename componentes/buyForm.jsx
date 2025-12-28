import '../pages/Register.css'
import { TextInput, Button } from '@mantine/core'
import { useLocation, Navigate } from 'react-router-dom'
import { useBuyProuct, handleBuyToBackend } from '../custom-hooks/useBuyProduct'

const BuyForm = () => {
  const location = useLocation()

  // 🔒 Proteção: state NÃO é persistente
  if (!location.state) {
    return <Navigate to="/" replace />
  }

  const { title, price } = location.state

  const form = useBuyProuct({ title, price })

  const handleBuy = (values) => {
    handleBuyToBackend(values)
  }

  return (
    <main className="login-body">
      <form className="form-container" onSubmit={form.onSubmit(handleBuy)}>
        <div className="inputs">
          <h2>Preencha o formulário e confirme sua compra</h2>
        </div>

        <div className="inputs">
          <TextInput
            label="NAME:"
            placeholder="Name"
            className="input-width"
            {...form.getInputProps('userName')}
          />
        </div>

        <div className="inputs">
          <TextInput
            label="EMAIL:"
            placeholder="xxxxxxxx@gmail.com"
            className="input-width"
            {...form.getInputProps('userEmail')}
          />
        </div>

        <div className="inputs">
          <TextInput
            label="CPF:"
            placeholder="000.000.000-00"
            className="input-width"
            {...form.getInputProps('userCPF')}
          />
        </div>

        <div className="inputs">
          <TextInput
            label="CREDIT CARD:"
            placeholder="1234 5678 9012 3456"
            className="input-width"
            {...form.getInputProps('credityCard')}
          />
        </div>

        <div>
          <Button type="submit">Comprar</Button>
        </div>
      </form>
    </main>
  )
}

export default BuyForm
