import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";


const Login = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    if(error){
      errorElement=
          <div>
            <p className="text-danger text-center">Error: {error.message}</p>
          </div>
    }
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const handleSubmit = event =>{
        event.preventDefault();
     
        signInWithEmailAndPassword(email, password);
        console.log(email,password);
    }
    const navigate = useNavigate()
    const navigateRegister=event=>{
        navigate('/register')
    }
    const resetPassword= async()=>{
        await sendPasswordResetEmail(email);
    }

    if(user){
         navigate(from, { replace: true })
    }

  return (
    <div className="container w-50 mx-auto my-5">
      <h2 className="text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button className="w-50 d-block mx-auto my-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center" >New to Genius car? <Link to='/register' onClick={navigateRegister} className="text-primary pe-auto text-decoration-none">Please Sign-Up</Link> </p>
      <p className="text-center" >Forget password? <Link to='/register' onClick={resetPassword} className="text-primary pe-auto text-decoration-none">Reset-Password</Link> </p>
      {errorElement}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
