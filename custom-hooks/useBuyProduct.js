import { useForm } from '@mantine/form'
import axios from 'axios'

export const useBuyProuct = ({ title, price }) => {
  return useForm({
    initialValues: {
      userName: '',
      userEmail: '',
      userCPF: '',
      userCredityCard: '',
      productTitle: title || '',
      productPrice: price || 0,
      day: new Date()
    },

    validate: {
      userName: (value = '') =>
        value.length < 2 ? 'Nome deve ter ao menos 2 caracteres' : null,

      userEmail: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Email inválido',

      userCPF: (value) =>
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)
          ? null
          : 'CPF inválido (000.000.000-00)',

      credityCard: (value) =>
        /^\d{16}$/.test(value.replace(/\s/g, ''))
          ? null
          : 'Cartão de crédito inválido'
    }
  })
}

export const handleBuyToBackend = async (values) => {
  try {
    const payload = {
      userName: values.userName,
      userEmail: values.userEmail,
      userCPF: values.userCPF,
      userCredityCard: values.credityCard,
      productTitle: values.productTitle,
      productPrice: values.productPrice,
      day: values.day
    }

    const res = await axios.post(
      'http://localhost:3000/users/buy',
      payload
    )

    console.log(res.data)
  } catch (error) {
    console.error(error)
  }
}
