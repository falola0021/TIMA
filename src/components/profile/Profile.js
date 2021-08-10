import React, { useState, useEffect, useRef } from 'react';
import Style from './Profile.module.css';
import { Form, Modal, Row, Col, Button } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';
import { firebase_app } from '../../firebase';

function Profile() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const handleDeatails = () => {
    setShow(!show);
  };

  const number = useRef();
  const role = useRef();
  const name = useRef();
  const email = useRef();
  const image = useRef();
  const address = useRef();

  const currentUser = firebase_app.auth().currentUser;
  const userId = currentUser?.uid;

  const profileInfo = (e) => {
    e.preventDefault();

    try {
      if (userId) {
        const doc = firebase_app.firestore().collection('profiles').doc(userId);

        // const { firstName, lastName } = action.payload

        doc.set({
          fullName: name.current.value,
          email: email.current.value,
          phoneNumber: number.current.value,
          address: address.current.value,
          imageUrl: image.current.value,
          role: role.current.value,
          userId: userId,
        });

        // toast.dismiss(infoToastID);
        // toast.success('Profile data saved');

        //put(setProfileDataSuccess());
      } else {
        // toast.error('You are not logged in');
      }
    } catch (error) {
      // toast.dismiss(infoToastID);
      // toast.error(error.message);
      // put(setProfileDataError(error))
    }
  };
  console.log(user, 'info');

  const getProfileInfo = async () => {
    try {
      if (userId) {
        await firebase_app
          .firestore()
          .collection('profiles')
          .doc(userId)
          .get()
          .then((snapshot) => setUser(snapshot.data()));
      } else {
        console.log('go user');
      }
    } catch (error) {
      console.log('no user1');
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <>
      <div className={Style.headertext}>Profile</div>
      <div className={Style.footerbox}>
        <Row>
          <Col className={Style.col}>
            <div className={Style.title}>
              <div>Personal Information</div>
              <div onClick={handleDeatails} className={Style.new}>
                Update Personal Information
              </div>
              <img
                className={Style.coyimage}
                src='https://ifa-forwarding.net/blog/wp-content/uploads/2019/03/logistics-management-software-erp-delhi-india.png'
                alt='company logo'
              />
            </div>

            {user && (
              <div className={Style.box}>
                <div className={Style.namebox}>
                  <div className={Style.label}>Name :</div>
                  <div className={Style.value}>{user.fullName}</div>
                </div>
                <div className={Style.namebox}>
                  <div className={Style.label}>Address :</div>
                  <div className={Style.value}>{user.address}</div>
                </div>
                <div className={Style.namebox}>
                  <div className={Style.label}>Phone Number :</div>
                  <div className={Style.value}>{user.phoneNumber}</div>
                </div>
                <div className={Style.namebox}>
                  <div className={Style.label}>Email:</div>
                  <div className={Style.value}>{user.email}</div>
                </div>
                <div className={Style.namebox}>
                  <div className={Style.label}>Role:</div>
                  <div className={Style.value}>{user.role}</div>
                </div>
                <div className={Style.namebox}>
                  <div className={Style.label}>Date joined:</div>
                  <div className={Style.value}>{user.createdAt || ''}</div>
                </div>
              </div>
            )}

            <div className={Style.title}>
              <div>Company Information</div>
              <div onClick={handleDeatails} className={Style.new}>
                Create New
              </div>
              <img
                className={Style.coyimage}
                src='https://ifa-forwarding.net/blog/wp-content/uploads/2019/03/logistics-management-software-erp-delhi-india.png'
                alt='company logo'
              />
            </div>
            <div className={Style.box}>
              <div className={Style.namebox}>
                <div className={Style.label}>Name :</div>
                <div className={Style.value}>Falola Adedayo</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Personal Address :</div>
                <div className={Style.value}>11 Romola street ogba lagos</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Personal Phone Number :</div>
                <div className={Style.value}>0908756373</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Personal Email:</div>
                <div className={Style.value}>dayo@gmail.com</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Date joined:</div>
                <div className={Style.value}>24/10/1990</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Company Name:</div>
                <div className={Style.value}>Olu Logistics</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Address :</div>
                <div className={Style.value}>123 oluwole street ogba,Lagos</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Company Number:</div>
                <div className={Style.value}>08097647334</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Company Email:</div>
                <div className={Style.value}>dayo@gmail.com</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Work Days:</div>
                <div className={Style.value}>Monday-Friday</div>
              </div>
              <div className={Style.button}>
                <Button className={Style.edit}>Edit</Button>
              </div>
            </div>
          </Col>
          <Col className={Style.col}>
            <div className={Style.title}>
              <div>Rider(s) Information</div>
              <div className={Style.new}>Create New</div>
              <img
                className={Style.coyimage}
                src='https://ifa-forwarding.net/blog/wp-content/uploads/2019/03/logistics-management-software-erp-delhi-india.png'
                alt='company logo'
              />
            </div>
            <div className={Style.box}>
              <div className={Style.namebox}>
                <div className={Style.label}>Name :</div>
                <div className={Style.value}>Falola Adedayo</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Address :</div>
                <div className={Style.value}>11 Romola street ogba lagos</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Phone Number :</div>
                <div className={Style.value}>0908756373</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Rider Id:</div>
                <div className={Style.value}>5636988Ad</div>
              </div>
              <div className={Style.button}>
                <Button className={Style.edit}>Edit</Button>
                <Button className={Style.delete}>Delete</Button>
              </div>
            </div>
            <hr />
            <div className={Style.title}>
              <img
                className={Style.coyimage}
                src='https://ifa-forwarding.net/blog/wp-content/uploads/2019/03/logistics-management-software-erp-delhi-india.png'
                alt='company logo'
              />
            </div>
            <div className={Style.box}>
              <div className={Style.namebox}>
                <div className={Style.label}>Name :</div>
                <div className={Style.value}>Falola Adedayo</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Address :</div>
                <div className={Style.value}>11 Romola street ogba lagos</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Phone Number :</div>
                <div className={Style.value}>0908756373</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Email:</div>
                <div className={Style.value}>dayo@gmail.com</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Rider Id:</div>
                <div className={Style.value}>5636988Ad</div>
              </div>
              <div className={Style.button}>
                <Button className={Style.edit}>Edit</Button>
                <Button className={Style.delete}>Delete</Button>
              </div>
            </div>
            <hr />
          </Col>
          <Col className={Style.col}>
            <div className={Style.title}>
              <div>Bike(s) Information</div>
              <div className={Style.new}>Create New</div>
              <img
                className={Style.coyimage}
                src='https://ifa-forwarding.net/blog/wp-content/uploads/2019/03/logistics-management-software-erp-delhi-india.png'
                alt='company logo'
              />
            </div>
            <div className={Style.box}>
              <div className={Style.namebox}>
                <div className={Style.label}>Bike Name:</div>
                <div className={Style.value}>Falola Adedayo</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Model :</div>
                <div className={Style.value}>11 Romola street ogba lagos</div>
              </div>
              <div className={Style.namebox}>
                <div className={Style.label}>Plate Number :</div>
                <div className={Style.value}>0908756373</div>
              </div>
              <div className={Style.button}>
                <Button className={Style.edit}>Edit</Button>
                <Button className={Style.delete}>Delete</Button>
              </div>
            </div>
            <hr />
          </Col>
        </Row>

        <Modal
          onHide={handleDeatails}
          show={show}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered>
          <div className={Style.headerbox}>
            <img
              className={Style.brandlogo}
              src='https://res.cloudinary.com/timang/image/upload/v1597037522/WhatsApp_Image_2020-08-09_at_7.58.33_PM_h85jes.jpg'
            />
            <div>
              <i className='fa fa-times' onClick={handleDeatails}></i>
            </div>
          </div>
          <Modal.Body>
            <div className={Style.formbox}>
              <Form onSubmit={profileInfo}>
                <Row>
                  <Col>
                    <Form.Group controlId='formGroupEmail'>
                      <Form.Label className={Style.label}>Full Name</Form.Label>
                      <Form.Control
                        ref={name}
                        required
                        className={Style.forminput}
                        type='text'
                        placeholder='Enter Full Name'
                      />
                    </Form.Group>
                    <Form.Group controlId='formGroupEmail'>
                      <Form.Label className={Style.label}>
                        Personal Number
                      </Form.Label>
                      <Form.Control
                        className={Style.forminput}
                        type='text'
                        ref={number}
                        required
                        placeholder='Enter Personal Number'
                      />
                    </Form.Group>
                    <Form.Group controlId='formGroupPassword'>
                      <Form.Label className={Style.label}>
                        Comapny Logo
                      </Form.Label>
                      <Form.Control
                        ref={image}
                        required
                        className={Style.formfile}
                        type='file'
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId='formGroupEmail'>
                      <Form.Label className={Style.label}>Address</Form.Label>
                      <Form.Control
                        className={Style.forminput}
                        type='text'
                        placeholder='Enter Personal Address'
                        ref={address}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId='formGroupEmail'>
                      <Form.Label className={Style.label}>Email</Form.Label>
                      <Form.Control
                        className={Style.forminput}
                        type='email'
                        ref={email}
                        required
                        defaultValue={currentUser.email}
                      />
                    </Form.Group>
                    <Form.Label className={Style.label}>Role</Form.Label>
                    <div>
                      <select
                        ref={role}
                        required
                        name='usertype'
                        className={Style.formselect}>
                        <option>Select Role</option>
                        <option value='partner'>Partner</option>
                        <option value='basicuser'>Basic User</option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <div className={Style.formsubmitbox}>
                  <Button type='submit' className={Style.formsubmit}>
                    Update
                  </Button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Profile;
