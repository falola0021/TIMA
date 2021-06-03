import React, { useState } from 'react'
import Style from '../../pages/home/Home.module.css'
import { Form, Button } from 'react-bootstrap'
import { Select, FormControl } from '@chakra-ui/core'

function PriceChecker () {
  const [switchView, setSwitchView] = useState(true)

  const handleSwitch = () => {
    setSwitchView(!switchView)
  }

  return (
<div className={Style.formbox}>
  <Form>
    <Form.Group controlId='formGroupEmail'>
      <Form.Label className={Style.label}>
        Pick-up Location
      </Form.Label>
      <Form.Control className={Style.forminput} type='text' placeholder='Enter pick up address' />
    </Form.Group>
    <Form.Group controlId='formGroupPassword'>
      <Form.Label className={Style.label}>
        Delivery Location
      </Form.Label>
      <Form.Control className={Style.forminput} type='text' placeholder='Enter delivery address' />
    </Form.Group>
    <FormControl id='country'>
      <Form.Label className={Style.label}>
        Delivery Schedule
      </Form.Label>
      <Select className={Style.formselect}>
        <option>
          Same day
        </option>
        <option>
          Next day
        </option>
        <option>
          Express(Instant)
        </option>
      </Select>
    </FormControl>
    <Button className={Style.formsubmit}>
      Check
    </Button>
  </Form>
  <div className={Style.resultbox}>
    <div className={Style.result}>
      ₦ 10000
    </div>
  </div>
</div>


  )
}

export default PriceChecker
