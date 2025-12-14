import { useForm } from '@mantine/form'

export default function useUserForm() {
  return useForm({
    initialValues: {
      firstName: '',
      secondName: '',
      bornDate: '',
      adress: '',
      cpf: '',
      rg: '',
      phoneNumber: '',
      banckAccont: '',
      banckAgency: '',
      credityCard: '',
      cvc: '',
      validDate: '',
    },

    validate: {
      firstName: (value) =>
        value.length < 2 ? 'Nome deve ter ao menos 2 caracteres' : null,

      secondName: (value) =>
        value.length < 2 ? 'Sobrenome deve ter ao menos 2 caracteres' : null,

      bornDate: (value) =>
        !value ? 'Data de nascimento é obrigatória' : null,

      adress: (value) =>
        value.length < 5 ? 'Endereço inválido' : null,

      cpf: (value) =>
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)
          ? null
          : 'CPF inválido (000.000.000-00)',

      rg: (value) =>
        /^\d{5,12}$/.test(value)
          ? null
          : 'RG inválido',

      phoneNumber: (value) =>
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value)
          ? null
          : 'Telefone inválido (ex: (11) 91234-5678)',

      banckAccont: (value) =>
        /^\d{4,12}$/.test(value)
          ? null
          : 'Conta bancária inválida',

      banckAgency: (value) =>
        /^\d{3,5}$/.test(value)
          ? null
          : 'Agência bancária inválida',

      credityCard: (value) =>
        /^\d{16}$/.test(value.replace(/\s/g, ''))
          ? null
          : 'Cartão de crédito inválido',

      cvc: (value) =>
        /^\d{3}$/.test(value)
          ? null
          : 'CVC inválido',

      validDate: (value) =>
        /^\d{2}\/\d{2}$/.test(value)
          ? null
          : 'Validade inválida (MM/AA)',
    },
  });
}

