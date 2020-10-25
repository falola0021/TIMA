import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/authActions/auth";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Row, Col } from "react-bootstrap";
import Styles from "./RegistrationForm.module.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vfirstname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The firstname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vlastname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The lastnmae must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be atleast 6 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.messageReducer);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(firstName, lastName, email, password))
        .then((response) => {
          setLoading(false);
          // setMessage(response.data.messageReducer);
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
          setLoading(false);
        });
    }
  };

  return (
    <Form onSubmit={handleRegister} ref={form} className={Styles.form}>
      {!successful && (
        <div>
          <Row>
            <Col>
              <div className="form-group">
                <label className={Styles.label} htmlFor="firstName">
                  Firstname
                </label>
                <Input
                  style={{
                    border: " 1px solid #4f26aa",
                    backgroundColor: "rgba(59, 122, 254, 0.02)",
                  }}
                  placeholder="Enter Firstname"
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={onChangeFirstName}
                  validations={[required, vfirstname]}
                />
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label className={Styles.label} htmlFor="lastName">
                  Lastname
                </label>
                <Input
                  style={{
                    border: " 1px solid #4f26aa",
                    backgroundColor: "rgba(59, 122, 254, 0.02)",
                  }}
                  placeholder="Enter Lastname"
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={lastName}
                  onChange={onChangeLastName}
                  validations={[required, vlastname]}
                />
              </div>
            </Col>
          </Row>

          <div className="form-group">
            <label className={Styles.label} htmlFor="email">
              Email
            </label>
            <Input
              style={{
                border: " 1px solid #4f26aa",
                backgroundColor: "rgba(59, 122, 254, 0.02)",
              }}
              placeholder="Enter Email"
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onChangeEmail}
              validations={[required, validEmail]}
            />
          </div>

          <div className="form-group">
            <label className={Styles.label} htmlFor="password">
              Password
            </label>
            <Input
              style={{
                border: " 1px solid #4f26aa",
                backgroundColor: "rgba(59, 122, 254, 0.02)",
              }}
              placeholder="Enter Password"
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required, vpassword]}
            />
          </div>

          <div className="form-group">
            <button
              style={{ backgroundColor: "#4f26aa", color: "#ffffff" }}
              className="btn  btn-block"
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              Sign Up
            </button>
          </div>
        </div>
      )}

      {message && (
        <div className="form-group">
          <div
            className={
              successful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
      <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>
  );
};

export default Register;
