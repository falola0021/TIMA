import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Form } from 'react-bootstrap'
import Style from './FormStepper.module.css'

import { Select, FormControl } from '@chakra-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'

  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)

  },
  actionsContainer: {
    marginBottom: theme.spacing(0)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  step: {
    '& $completed': {
      color: 'rgb(220,177,0)'
    },
    '& $active': {
      color: 'rgb(220,177,0)'
    },
    '& $disabled': {
      color: 'red'
    }

  },
  alternativeLabel: {},
  active: {}, // needed so that the &$active tag works
  completed: {},
  disabled: {}

}))

function getSteps () {
  return ['Senders Informatiuon', 'Receivers Information', 'Package Information', 'Summary']
}

function getStepContent (step) {
  switch (step) {
    case 0:
      return <div>
               <Form>
                 <Form.Group controlId='formGroupEmail'>
                   <Form.Control className={Style.forminput} type='text' placeholder='Enter Senders Full Name' />
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control className={Style.forminput} type='text' placeholder='Senders Phone Number' />
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control
                     className={Style.forminput}
                     type='text'
                     as='textarea'
                     placeholder='Senders Address' />
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control className={Style.forminput} type='text' placeholder='Nearest Bustop' />
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control className={Style.forminput} type='email' placeholder='Senders Email' />
                 </Form.Group>
               </Form>
             </div>
    case 1:
      return <div>
               <Form>
                 <Form.Group controlId='formGroupEmail'>
                   <Form.Control className={Style.forminput} type='text' placeholder='Enter Receivers Full Name' />
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control className={Style.forminput} type='text' placeholder='Receivers Phone Number' />
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control
                     className={Style.forminput}
                     type='text'
                     as='textarea'
                     placeholder='Receivers Address' />
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control className={Style.forminput} type='text' placeholder='Nearest Bustop' />
                 </Form.Group>
               </Form>
             </div>
    case 2:
      return <div>
               <Form>
                 <Form.Group controlId='formGroupEmail'>
                   <Form.Control
                     className={Style.forminput}
                     as='textarea'
                     type='text'
                     placeholder='Item(s) Description' />
                 </Form.Group>
                 <Form.Group controlId='formGroupEmail'>
                   <Select className={Style.formselect}>
                     <option>
                       One way trip
                     </option>
                     <option>
                       Round trip
                     </option>
                   </Select>
                 </Form.Group>
                 <Form.Group controlId='formGroupEmail'>
                   <Select className={Style.formselect}>
                     <option>
                       Same day delivery
                     </option>
                     <option>
                       Next day delivery
                     </option>
                     <option>
                       Express(Instant) delivery
                     </option>
                   </Select>
                 </Form.Group>
                 <Form.Group controlId='formGroupPassword'>
                   <Form.Control className={Style.forminput} type='text' placeholder='Nearest Bustop' />
                 </Form.Group>
               </Form>
             </div>
    case 3:
      return `This should lead to the paynent portal for users to make payment`
    default:
      return 'Unknown step'
  }
}

export default function VerticalLinearStepper () {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={Style.formbox}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {steps.map((label, index) => (
             <Step classes={{ root: classes.step, completed: classes.completed }} key={label}>
               <StepLabel classes={{ alternativeLabel: classes.alternativeLabel, labelContainer: classes.labelContainer }} StepIconProps={{ classes: { root: classes.step, completed: classes.completed, active: classes.active } }}>
                 {label}
               </StepLabel>
               <StepContent>
                 <Typography>
                   {getStepContent(index)}
                 </Typography>
                 <div className={classes.actionsContainer}>
                   <div>
                     <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                       Back
                     </Button>
                     <Button
                       variant='contained'
                       color='primary'
                       onClick={handleNext}
                       style={{backgroundColor: 'rgb(220,177,0)'}}
                       className={classes.button}>
                       {activeStep === steps.length - 1 ? 'Payment' : 'Next'}
                     </Button>
                   </div>
                 </div>
               </StepContent>
             </Step>
           ))}
        </Stepper>
        {/* {activeStep === steps.length && (
                                                                                                                                                                                                           <Paper square elevation={0} className={classes.resetContainer}>
                                                                                                                                                                                                             <Typography>
                                                                                                                                                                                                               All steps completed - you're finished
                                                                                                                                                                                                             </Typography>
                                                                                                                                                                                                             <Button onClick={handleReset} className={classes.button}>
                                                                                                                                                                                                               Reset
                                                                                                                                                                                                             </Button>
                                                                                                                                                                                                           </Paper>
                                                                                                                                                                                                           )} */}
      </div>
    </div>
  )
}
