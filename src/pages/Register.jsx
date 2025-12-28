import './Register.css'
import FormSteps from '../componentes/FormSteps'
import { TextInput, PasswordInput, Button, Group, PinInput } from '@mantine/core'
import { useState } from 'react'
import useUserForm, { handleToBackend } from '../custom-hooks/useCreateUser'

const TOTAL_STEPS = 3

const Register = () => {
  const form = useUserForm()
  const [active, setActive] = useState(1)

  const nextStep = () =>
    setActive((current) => (current < TOTAL_STEPS ? current + 1 : current))

  const prevStep = () =>
    setActive((current) => (current > 1 ? current - 1 : current))

  const handleSubmit = (values) => {
    console.log(values)
    if (active === TOTAL_STEPS) {
      handleToBackend(values)
    }
  }

  return (
    <main className='login-body'>
      <div className='form-container'>
        <FormSteps active={active} setActive={setActive} />

        <form
          className='create-user'
          onSubmit={form.onSubmit(handleSubmit)}
        >
          {/* ================== STEP 1 ================== */}
          {active === 1 && (
            <>
              <div className='inputs'>
                <TextInput
                  label="FIRST NAME:"
                  placeholder="Name"
                  className='input-width'
                  {...form.getInputProps('firstName')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="SECOND NAME:"
                  placeholder="Second name"
                  className='input-width'
                  {...form.getInputProps('secondName')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="BORN DATE:"
                  placeholder="DD/MM/YYYY"
                  className='input-width'
                  {...form.getInputProps('bornDate')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="ADRESS:"
                  placeholder="Your address"
                  className='input-width'
                  {...form.getInputProps('adress')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="CPF:"
                  placeholder="000.000.000-00"
                  className='input-width'
                  {...form.getInputProps('cpf')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="RG:"
                  placeholder="Only numbers"
                  className='input-width'
                  {...form.getInputProps('rg')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="PHONE NUMBER:"
                  placeholder="(11) 91234-5678"
                  className='input-width'
                  {...form.getInputProps('phoneNumber')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="BANK ACCOUNT:"
                  placeholder="Account number"
                  className='input-width'
                  {...form.getInputProps('banckAccont')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="BANK AGENCY:"
                  placeholder="Agency"
                  className='input-width'
                  {...form.getInputProps('banckAgency')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="CREDIT CARD:"
                  placeholder="Only numbers"
                  className='input-width'
                  {...form.getInputProps('credityCard')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="CVC:"
                  placeholder="123"
                  className='input-width'
                  {...form.getInputProps('cvc')}
                />
              </div>

              <div className='inputs'>
                <TextInput
                  label="VALID DATE:"
                  placeholder="MM/AA"
                  className='input-width'
                  {...form.getInputProps('validDate')}
                />
              </div>
            </>
          )}

          {/* ================== STEP 2 ================== */}
          {active === 2 && (
            <>
              <div className='inputs'>
                <TextInput
                  label="EMAIL:"
                  placeholder="Your email"
                  className='input-width'
                  {...form.getInputProps('email')}
                />
              </div>

              <div className='inputs'>
                <PasswordInput
                  label="PASSWORD:"
                  placeholder="Password"
                  className='input-width'
                  {...form.getInputProps('password')}
                />
              </div>
            </>
          )}

          {active === 3 && (
            <div style={{padding: "20px", height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <h1>um email com um condifgo de confirmacaao foi enviado, 
                digite o codigo para proseguirr</h1>
              <div className='inputs'>
                <PinInput size='xl' className='input-width'style={{display: 'flex', justifyContent: "center"}}/>
              </div>
            </div>
          )}

          {/* ================== BUTTONS ================== */}
          <Group justify="center" mt="xl" mb="xl">
            <Button
              variant="default"
              onClick={prevStep}
              disabled={active === 1}
            >
              Back
            </Button>

            {active < TOTAL_STEPS && (
              <Button type="button" onClick={nextStep}>
                Next step
              </Button>
            )}

            {active === TOTAL_STEPS && (
              <Button type="submit">
                Create account
              </Button>
            )}
          </Group>
        </form>
      </div>
    </main>
  )
}

export default Register
