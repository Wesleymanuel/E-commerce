import { Stepper} from '@mantine/core';

const FormSteps = ({active,setActive}) => {

  return (
    <div style={{width : "90%", marginTop: "10px"}}>
        <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step description="Create an account">
            </Stepper.Step>
            <Stepper.Step  description="Verify email and password">
            </Stepper.Step>
            <Stepper.Step  description="Get full access">
            </Stepper.Step>
            <Stepper.Completed>
            </Stepper.Completed>
        </Stepper>
    </div>
  )
}

export default FormSteps