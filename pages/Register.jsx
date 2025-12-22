import './Register.css'
import FormSteps from '../componentes/FormSteps'
import { TextInput, PasswordInput, Button, Group  } from '@mantine/core';
import { useState } from 'react';
import useUserForm from '../custom-hooks/useCreateUser';
import { handleToBackend } from '../custom-hooks/useCreateUser';

const Register = () => {

  const  form = useUserForm()

    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main className='login-body'>
      <div className='form-container'>
        <FormSteps active={active} setActive={setActive}/>
        <form onSubmit={form.onSubmit((values) => handleToBackend(values))} className='create-user'>
          {active <= 1 ?
          (
          <>
            <div className='inputs'>
            <TextInput
              label="FIRST NAME: "

              placeholder="name"
              className='input-width'
              {...form.getInputProps("firstName")}
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="SECOND NAME: "

              placeholder="second name"
              className='input-width'
              {...form.getInputProps("secondName")}
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="BORN DATE: "

              placeholder="Your email"
              className='input-width'
              {...form.getInputProps("bornDate")}
            />
          </div>
          <div className='inputs'>
            <PasswordInput
              label="ADRESS: "
              className='input-width'
              placeholder="Input placeholder"
              {...form.getInputProps("adress")}
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="CPF: "
              placeholder="xxx.xxx.xxx-xx"
              className='input-width'
              {...form.getInputProps("cpf")}
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="RG: "
              className='input-width'
              placeholder="xxx.xxx.xxx-xx"
              {...form.getInputProps("rg")}
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="PHONE NUMBER: "
              className='input-width'
              placeholder="xxx.xxx.xxx-xx"
              {...form.getInputProps("phoneNumber")}
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="BANCK ACCONT: "
              className='input-width'
              placeholder="xxx.xxx.xxx-xx"
              {...form.getInputProps("banckAccont")}
            />
          </div>
          <div className='inputs'>
            <TextInput
            className='input-width'
              label="BANCK AGENCY: "
              placeholder="xxx.xxx.xxx-xx"
              {...form.getInputProps("banckAgency")}
            />
          </div>
          <div className='inputs'>
            <TextInput
            className='input-width'
              label="CREDITY CARD: "
              placeholder="xxx.xxx.xxx-xx"
              {...form.getInputProps("credityCard")}
            />
          </div>
          <div className='inputs'>
            <TextInput
            className='input-width'
              label="CVC: "
              placeholder="xxx.xxx.xxx-xx"
              {...form.getInputProps("cvc")}
            />
          </div>
          <div className='inputs'>
            <TextInput
            className='input-width'
              label="VALID DATE: "
              placeholder="xxx.xxx.xxx-xx"
              {...form.getInputProps("validDate")}
            />
          </div>
          </>
        ) 
        :
        (
        <>
          <div className='inputs'>
            <TextInput
              label="EMAIL: "
              className='input-width'
              placeholder="Your email"
              {...form.getInputProps("email")}
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="EMAIL: "
              className='input-width'
              placeholder="Your email"
              {...form.getInputProps("email")}
            />
          </div>
          <div className='inputs'>
            <PasswordInput
              label="PASSWORD: "
              className='input-width'
              placeholder="Input placeholder"
              {...form.getInputProps("password")}
            />
          </div>
          <div className='inputs'>
            <PasswordInput
              label="CONFIRM PASSWORD: "
              className='input-width'
              placeholder="Input placeholder"
              {...form.getInputProps("password")}
            />
          </div>
        </>
        )}
          <div>
            <Group justify="center" mt="xl" mb={"xl"}>
              <Button variant="default" onClick={prevStep}>Back</Button>
              <Button onClick={nextStep} type='submit'>Next step</Button>
            </Group>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register