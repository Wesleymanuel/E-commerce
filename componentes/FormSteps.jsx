import { useState } from 'react';
import { Stepper} from '@mantine/core';

const FormSteps = ({active,setActive}) => {

  return (
    <div>
        <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step label="First step" description="Create an account">
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email">
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
            </Stepper.Step>
            <Stepper.Completed>
            </Stepper.Completed>
        </Stepper>
    </div>
  )
}

export default FormSteps