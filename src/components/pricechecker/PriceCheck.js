import React, { useState } from 'react';
import Style from '../../pages/home/Home.module.css';
import { Form, Button } from 'react-bootstrap';
import { Select, FormControl } from '@chakra-ui/core';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Schedule } from '@material-ui/icons';

function PriceChecker() {
  const [switchView, setSwitchView] = useState(true);

  const [deliveryaddress, setDeliveryaddress] = React.useState('');
  const [deliverycoordinates, setDeliverycoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const [pickupaddress, setPickupaddress] = React.useState('');
  const [pickupcoordinates, setPickupcoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleDelivery = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setDeliveryaddress(value);
    setDeliverycoordinates(latLng);
  };

  const handlePickup = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setPickupaddress(value);
    setPickupcoordinates(latLng);
  };

  const [distance, setDistance] = React.useState('');
  const [deliveryschedule, setDeliveryschedule] = React.useState('');
  const [price, setPrice] = useState('100');

  const handleDeliverySchedule = (e) => {
    const schedule = e.target.value;
    setDeliveryschedule(schedule);
  };

  // console.log(deliveryschedule,"gtgt")

  const handleDistance = (e, unit) => {
    e.preventDefault();

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
      let discount = convertedDistance - deliveryschedule;
      let amount = price * discount;
      let roundup = Math.ceil(amount);
      setDistance(roundup);
      return distance;
    }
  };

  const handleSwitch = () => {
    setSwitchView(!switchView);
  };

  return (
    <div className={Style.formbox}>
      <Form onSubmit={handleDistance}>
        <Form.Group controlId='formGroupEmail'>
          <Form.Label className={Style.label}>Pick-up Location</Form.Label>
          <PlacesAutocomplete
            value={pickupaddress}
            onChange={setPickupaddress}
            onSelect={handlePickup}>
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
                  {...getInputProps({ placeholder: 'Enter pick-up address' })}
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
        </Form.Group>
        <Form.Group controlId='formGroupPassword'>
          <Form.Label className={Style.label}>Delivery Location</Form.Label>
          <PlacesAutocomplete
            value={deliveryaddress}
            onChange={setDeliveryaddress}
            onSelect={handleDelivery}>
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
                  {...getInputProps({ placeholder: 'Enter delivery address' })}
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
        </Form.Group>
        <FormControl id='country'>
          <Form.Label className={Style.label}>Delivery Schedule</Form.Label>
          <Select
            value={deliveryschedule}
            onChange={handleDeliverySchedule}
            className={Style.formselect}>
            <option>Select Delivery Type</option>
            <option value='0.25'>Same day</option>
            <option value='0.30'>Next day</option>
            <option value='0'>Express(Instant)</option>
          </Select>
        </FormControl>
        <Button type='submit' className={Style.formsubmit}>
          Check
        </Button>
      </Form>
      {distance && (
        <div className={Style.resultbox}>
          <div className={Style.result}>₦ {distance}</div>
        </div>
      )}
    </div>
  );
}

export default PriceChecker;
