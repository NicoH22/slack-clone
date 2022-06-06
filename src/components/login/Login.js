import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt="login avatar"
        />
        <h1>Connectez vous sur HNH Slack</h1>
        <Button onClick={signIn}>Connexion avec Google</Button>
      </div>
    </div>
  );
}

export default Login;
