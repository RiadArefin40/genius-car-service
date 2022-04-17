import React from "react";
import logo from '../../../../Assets/images/googleLogo/Colorful-google-logo-design-on-transparent-PNG-1-removebg-preview.png' 
import logo2 from '../../../../Assets/images/googleLogo/download-removebg-preview.png'
import logo3 from '../../../../Assets/images/googleLogo/GitHub-Mark-removebg-preview.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    
    const navigate = useNavigate();
    let errorElement ;
    if (error || error1) {
        errorElement=
          <div>
            <p>Error: {error?.message} {error1?.message}</p>
          </div>
        
      }

    if(user || user1){
        navigate('/home')
    }  
    const handleGoogleSignIn=()=>{
            signInWithGoogle();
    }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
          <button onClick={handleGoogleSignIn} className="btn btn-info w-50 d-block mx-auto">
              <img style={{height:'30px'}} src={logo} alt="" />
              <span className="px-2">Google Sign-in</span>
              </button>
      </div>
      <div>
          <button className="btn btn-info w-50 d-block mx-auto my-2">
              <img style={{height:'35px'}} src={logo2} alt="" />
              <span className="px-2">FaceBook Sign-in</span>
              </button>
      </div>
      <div>
          <button onClick={ ()=>signInWithGithub()} className="btn btn-info w-50 d-block mx-auto">
              <img style={{height:'30px'}} src={logo3} alt="" />
              <span className="px-2">GitHub Sign-in</span>
              </button>
      </div>
    </div>
  );
};

export default SocialLogin;
