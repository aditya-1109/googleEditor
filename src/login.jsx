import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientId = "712020369481-cc2ff6uqodrppe0jcen2qqqedb1bakbt.apps.googleusercontent.com";

const Login = () => {
  const handleSuccess = async (response) => {
    console.log("Login Success:", response);

    try {
      const res = await fetch("https://editor-backend-woad.vercel.app/auth/google/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
      });

      const data = await res.json();

      if (res.ok) {
        // Store user details
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("User stored:", data.user);
        alert(`Welcome, ${data.user.name}`);
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleFailure = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div style={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "center" }}>
        <h2>Google Login</h2>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
