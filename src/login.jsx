import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId = "712020369481-cc2ff6uqodrppe0jcen2qqqedb1bakbt.apps.googleusercontent.com";

const Login = () => {
  const handleSuccess = (response) => {
    console.log("Login Success:", response);
    fetch("http://localhost:5000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: response.credential }),
    });
  };

  const handleFailure = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Google Login</h2>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
