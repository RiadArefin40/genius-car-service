import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const checkRef = useRef(true);
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const name = nameRef.current.value;
  const check = checkRef.current.checked;

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);
    if(user){
      console.log(user)
    }
  const handleRegister = async (event) => {
    event.preventDefault();
  
  await createUserWithEmailAndPassword(email, password);
  await updateProfile({ displayName: name });
  console.log('Updated profile');
  navigate('/home')
    
  };

  const navigate = useNavigate();
  const navigateLigin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }
  return (
    <div className="container w-50 mx-auto my-5 ">
      <h2 className="text-center text-primary">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className={agree ? "text-primary" : "text-danger"}
            onClick={() => setAgree(!agree)}
            ref={checkRef}
            type="checkbox"
            label="Accept terms and condition"
          />
        </Form.Group>

        <Button
          disabled={!agree}
          className="w-50 d-block mx-auto my-2"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </Form>
      <p className="text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          onClick={navigateLigin}
          className="text-danger pe-auto text-decoration-none"
        >
          Please Log-in
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
