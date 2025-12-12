import './Login.css'
import FormSteps from '../componentes/FormSteps'
import { TextInput, PasswordInput, Button, Group  } from '@mantine/core';
import { useState } from 'react';

const Login = () => {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main className='login-body'>
      <div className='form-container'>
        <FormSteps active={active} setActive={setActive}/>
        <form action="" className='create-user'>
          <div className='inputs'>
            <TextInput
              label="name: "
              style={{width: "70%"}}
              placeholder="name"
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="second name: "
              style={{width: "70%"}}
              placeholder="second name"
            />
          </div>
          <div className='inputs'>
            <TextInput
              label="Your email"
              style={{width: "70%"}}
              placeholder="Your email"
            />
          </div>
          <div className='inputs'>
            <PasswordInput
              label="Input label"
              style={{width: "70%"}}
              placeholder="Input placeholder"
            />
          </div>
          <div className='inputs'>
            <TextInput
            style={{width: "70%"}}
              label="CPF: "
              placeholder="xxx.xxx.xxx-xx"
            />
          </div>
          <div>
            <Group justify="center" mt="xl">
              <Button variant="default" onClick={prevStep}>Back</Button>
              <Button onClick={nextStep}>Next step</Button>
            </Group>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login