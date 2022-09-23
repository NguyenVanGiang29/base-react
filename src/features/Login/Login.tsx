import UserIcon from "@mui/icons-material/PersonOutlineOutlined";
import PasswordIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="container-login fontLink">
        <p className="title">Login</p>
        <p className="accountInfo">Username</p>
        <div className="accountInfoHolder">
          <UserIcon className="icon" />
          <input
            className="accountInput"
            placeholder="Type your username"
          ></input>
        </div>
        <p className="accountInfo">Password</p>
        <div className="accountInfoHolder">
          <PasswordIcon className="icon" />
          <input
            className="accountInput"
            type="password"
            placeholder="Type your password"
          ></input>
        </div>
        <p className="forgotPassword">Forgot password?</p>
        <button
          className="loginButton"
          onClick={() => {
            navigate("/");
          }}
        >
          LOGIN
        </button>
        <p className="signUpUsing">Or Sign Up Using</p>
        <div className="signUpOptionHolder">
          <Avatar
            className="signUpOptionItem"
            alt="facebook"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS579QjnGvXDPgRXgI-9pbGUC89Cjy9Rtl79w&usqp=CAU"
          />
          <Avatar
            className="signUpOptionItem"
            alt="twitter"
            src="https://e7.pngegg.com/pngimages/421/879/png-clipart-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf.png"
          />
          <Avatar
            className="signUpOptionItem"
            alt="google"
            src="https://dgmasia.vn/wp-content/uploads/2022/03/22.png"
          />
        </div>
        <p className="signUpUsing">Or Sign Up Using</p>
        <div className="signUpButtonHolder">
          <a className="signUpButton" href="/">
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
