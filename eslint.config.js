import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useFacebookLogin } from 'react-facebook-login';

function LoginSignupPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const googleLogin = useGoogleLogin({
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
    onSuccess: (response) => {
      setIsLoggedIn(true);
      setUserData(response.profileObj);
    },
    onFailure: (error) => {
      console.error(error);
    },
  });

  const facebookLogin = useFacebookLogin({
    appId: 'YOUR_FACEBOOK_APP_ID',
    autoLoad: false,
    callback: (response) => {
      if (response.status === 'success') {
        setIsLoggedIn(true);
        setUserData(response.profile);
      } else {
        console.error(response);
      }
    },
  });

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login or Signup</h2>
          <button onClick={googleLogin}>Login with Google</button>
          <button onClick={facebookLogin}>Login with Facebook</button>
          {/* Add other login options as needed */}
        </div>
      )}
    </div>
  );
}

export default LoginSignupPage;