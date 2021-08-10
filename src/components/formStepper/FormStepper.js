import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Form, Row, Col } from 'react-bootstrap';
import Style from './FormStepper.module.css';
import { usePaystackPayment } from 'react-paystack';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Select, FormControl } from '@chakra-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(0),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  step: {
    '& $completed': {
      color: 'rgb(220,177,0)',
    },
    '& $active': {
      color: 'rgb(220,177,0)',
    },
    '& $disabled': {
      color: 'red',
    },
  },
  alternativeLabel: {},
  active: {}, // needed so that the &$active tag works
  completed: {},
  disabled: {},
}));

function getSteps() {
  return [
    'Senders Informatiuon',
    'Receivers Information',
    'Package Information',
    'Summary',
  ];
}

function getStepContent(
  step,
  setSenderaddress,

  setPickupcoordinates,
  senderaddress,
  receiveraddress,
  setSenderemail,
  setSendernumber,
  setSendernearestbustop,
  setSendername,
  setDeliverycoordinates,
  setDeliverytype,
  setDeliveryschedule,
  setItemdescription,
  setReceiveraddress,
  setReceivername,
  setReceivernearestbustop,
  setReceivernumber,

  senderemail,
  sendername,
  sendernumber,
  sendernearestbustop,

  receivernumber,
  receivernearestbustop,
  receivername,

  itemdescription,
  deliveryschedule,
  deliverytype,
  distance
) {
  const handleSenderaddress = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setSenderaddress(value);
    console.log(latLng, 'results');
    setPickupcoordinates(latLng);
  };

  const handleSenderemail = (e) => {
    const semail = e.target.value;
    setSenderemail(semail);
  };

  const handleSendernumber = (e) => {
    const snum = e.target.value;
    setSendernumber(snum);
  };

  const handleSendername = (e) => {
    const sname = e.target.value;
    setSendername(sname);
  };

  const handleSenderbustop = (e) => {
    const sbstop = e.target.value;
    setSendernearestbustop(sbstop);
  };

  const handleReceiveraddress = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setReceiveraddress(value);
    setDeliverycoordinates(latLng);
  };

  const handleReceivername = (e) => {
    const rname = e.target.value;
    setReceivername(rname);
  };
  const handleReceiverbstop = (e) => {
    const rbstop = e.target.value;
    setReceivernearestbustop(rbstop);
  };
  const handleReceivernumber = (e) => {
    const rnum = e.target.value;
    setReceivernumber(rnum);
  };

  const handleItemdes = (e) => {
    const itemdes = e.target.value;
    setItemdescription(itemdes);
  };

  const handleSchedule = (e) => {
    const dschedule = e.target.value;
    setDeliveryschedule(dschedule);
  };

  const handleType = (e) => {
    const dtype = e.target.value;
    setDeliverytype(dtype);
  };

  switch (step) {
    case 0:
      return (
        <div>
          <Form.Group controlId='formGroupEmail'>
            <Form.Control
              onChange={handleSendername}
              value={sendername}
              className={Style.forminput}
              type='text'
              placeholder='Enter Senders Full Name'
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Control
              value={sendernumber}
              onChange={handleSendernumber}
              className={Style.forminput}
              type='number'
              placeholder='Senders Phone Number'
            />
          </Form.Group>

          <PlacesAutocomplete
            value={senderaddress}
            onChange={setSenderaddress}
            onSelect={handleSenderaddress}>
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className='mb-4'>
                <Form.Control
                  className={Style.forminput}
                  type='text'
                  as='textarea'
                  {...getInputProps({ placeholder: "Enter Sender's address" })}
                />
                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      fontSize: '14px',
                      cursor: 'pointer',
                      border: '1px solid #f3f3f3',
                      backgroundColor: suggestion.active ? '#dcb100' : '#fff',
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

          <Form.Group controlId='formGroupPassword'>
            <Form.Control
              value={sendernearestbustop}
              onChange={handleSenderbustop}
              className={Style.forminput}
              type='text'
              placeholder='Nearest Bustop'
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Control
              value={senderemail}
              onChange={handleSenderemail}
              className={Style.forminput}
              type='email'
              placeholder='Senders Email'
            />
          </Form.Group>
        </div>
      );
    case 1:
      return (
        <div>
          <Form.Group controlId='formGroupEmail'>
            <Form.Control
              className={Style.forminput}
              value={receivername}
              onChange={handleReceivername}
              type='text'
              placeholder='Enter Receivers Full Name'
            />
          </Form.Group>
          <Form.Group controlId='formGroupPassword'>
            <Form.Control
              value={receivernumber}
              onChange={handleReceivernumber}
              className={Style.forminput}
              type='number'
              placeholder='Receivers Phone Number'
            />
          </Form.Group>

          <PlacesAutocomplete
            value={receiveraddress}
            onChange={setReceiveraddress}
            onSelect={handleReceiveraddress}>
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className='mb-4'>
                <Form.Control
                  className={Style.forminput}
                  type='text'
                  as='textarea'
                  {...getInputProps({
                    placeholder: "Enter Receiver's address",
                  })}
                />
                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      fontSize: '14px',
                      cursor: 'pointer',
                      border: '1px solid #f3f3f3',
                      backgroundColor: suggestion.active ? '#dcb100' : '#fff',
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

          <Form.Group controlId='formGroupPassword'>
            <Form.Control
              value={receivernearestbustop}
              onChange={handleReceiverbstop}
              className={Style.forminput}
              type='text'
              placeholder='Nearest Bustop'
            />
          </Form.Group>
        </div>
      );
    case 2:
      return (
        <div>
          <Form.Group controlId='formGroupEmail'>
            <Form.Control
              value={itemdescription}
              onChange={handleItemdes}
              className={Style.forminput}
              as='textarea'
              type='text'
              placeholder='Item(s) Description'
            />
          </Form.Group>
          <Form.Group
            value={deliverytype}
            onChange={handleType}
            controlId='formGroupEmail'>
            <Select className={Style.formselect}>
              <option>Trip Type</option>
              <option value='1'>One way trip</option>
              <option value='2'>Round trip</option>
            </Select>
          </Form.Group>
          <Form.Group
            value={deliveryschedule}
            onChange={handleSchedule}
            controlId='formGroupEmail'>
            <Select className={Style.formselect}>
              <option>Select Delivery Schedule</option>
              <option value='0.25'>Same day</option>
              <option value='0.30'>Next day</option>
              <option value='0'>Express(Instant)</option>
            </Select>
          </Form.Group>
        </div>
      );
    case 3:
      return (
        <div>
          <Row>
            <Col sm={12}>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Sender Name: </span>{' '}
                <span className={Style.stitle}>{sendername} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Sender Address: </span>{' '}
                <span className={Style.stitle}>{senderaddress} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Nearest B/S: </span>{' '}
                <span className={Style.stitle}>{sendernearestbustop} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Sender Email: </span>{' '}
                <span className={Style.stitle}>{senderemail} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Sender Number: </span>{' '}
                <span className={Style.stitle}>{sendernumber} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Receiver Name: </span>{' '}
                <span className={Style.stitle}>{receivername} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Receiver Address: </span>{' '}
                <span className={Style.stitle}>{receiveraddress} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Nearest B/S: </span>{' '}
                <span className={Style.stitle}>{receivernearestbustop} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Receiver Number: </span>{' '}
                <span className={Style.stitle}>{receivernumber} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Item Description: </span>{' '}
                <span className={Style.stitle}>{itemdescription} </span>
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Delivary Schedule: </span>{' '}
                {deliveryschedule && deliveryschedule == '0.25' && (
                  <span className={Style.stitle}>Same day</span>
                )}
                {deliveryschedule && deliveryschedule == '0.30' && (
                  <span className={Style.stitle}>Next day</span>
                )}
                {deliveryschedule && deliveryschedule == '0' && (
                  <span className={Style.stitle}>Express</span>
                )}
              </div>
              <div className={Style.infobox}>
                <span className={Style.slabel}>Trip Type: </span>{' '}
                {deliverytype && deliverytype == '2' ? (
                  <span className={Style.stitle}>Round Trip</span>
                ) : (
                  ''
                )}
                {deliverytype && deliverytype == '1' ? (
                  <span className={Style.stitle}>One way trip</span>
                ) : (
                  ''
                )}
              </div>
              {distance && (
                <div className={Style.totalbox}>
                  <div className={Style.totalamt}>
                    ₦ {distance * deliverytype}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </div>
      );
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep > 1) {
      handleDistance();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [senderaddress, setSenderaddress] = React.useState('');
  const [senderemail, setSenderemail] = React.useState('');
  const [sendernumber, setSendernumber] = React.useState('');
  const [sendername, setSendername] = React.useState('');
  const [sendernearestbustop, setSendernearestbustop] = React.useState('');

  const [receiveraddress, setReceiveraddress] = React.useState('');
  const [receivernumber, setReceivernumber] = React.useState('');
  const [receivername, setReceivername] = React.useState('');
  const [receivernearestbustop, setReceivernearestbustop] = React.useState('');

  const [itemdescription, setItemdescription] = React.useState('');
  const [deliveryschedule, setDeliveryschedule] = React.useState('');
  const [deliverytype, setDeliverytype] = React.useState('');

  const [distance, setDistance] = React.useState('');

  const [price, setPrice] = useState('100');

  const [deliverycoordinates, setDeliverycoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const [pickupcoordinates, setPickupcoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleDistance = (e, unit) => {
    const lat1 = pickupcoordinates.lat;
    const lon1 = pickupcoordinates.lng;
    const lat2 = deliverycoordinates.lat;
    const lon2 = deliverycoordinates.lng;

    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      // if (unit=="K") { dist = dist * 1.609344 }
      // if (unit=="N") { dist = dist * 0.8684 }
      let convertedDistance = dist * 2.45;
      console.log(deliveryschedule, 'scg');
      let discount = convertedDistance - deliveryschedule;
      let amount = price * discount;
      let roundup = Math.ceil(amount);
      setDistance(roundup);
      console.log(distance, 'diatance');
      return distance;
    }
  };

  const config = {
    reference: new Date().getTime(),
    email: senderemail,
    amount: distance * 100,
    publicKey: 'pk_live_5de188b57778fdf92ad6ae5f1f7703c03cb0d356',
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    handleBack();
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className={Style.formbox}>
      <div></div>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {steps.map((label, index) => (
            <Step
              classes={{ root: classes.step, completed: classes.completed }}
              key={label}>
              <StepLabel
                classes={{
                  alternativeLabel: classes.alternativeLabel,
                  labelContainer: classes.labelContainer,
                }}
                StepIconProps={{
                  classes: {
                    root: classes.step,
                    completed: classes.completed,
                    active: classes.active,
                  },
                }}>
                {label}
              </StepLabel>
              <StepContent>
                <Typography>
                  {getStepContent(
                    index,

                    setSenderaddress,
                    setPickupcoordinates,
                    senderaddress,
                    receiveraddress,
                    setSenderemail,
                    setSendernumber,
                    setSendernearestbustop,
                    setSendername,
                    setDeliverycoordinates,
                    setDeliverytype,
                    setDeliveryschedule,
                    setItemdescription,
                    setReceiveraddress,
                    setReceivername,
                    setReceivernearestbustop,
                    setReceivernumber,

                    senderemail,
                    sendername,
                    sendernumber,
                    sendernearestbustop,

                    receivernumber,
                    receivernearestbustop,
                    receivername,

                    itemdescription,
                    deliveryschedule,
                    deliverytype,
                    distance
                  )}
                </Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleNext}
                      style={{ backgroundColor: 'rgb(220,177,0)' }}
                      className={classes.button}>
                      {activeStep === steps.length - 1 ? (
                        <div
                          onClick={() => {
                            initializePayment(onSuccess, onClose);
                          }}>
                          Make Payment
                        </div>
                      ) : (
                        'Next'
                      )}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
