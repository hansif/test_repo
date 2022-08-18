import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../../Context/Context";
//import { Link } from "react-router-dom";
import "./login.css";


export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user,dispatch, isFetching } = useContext(Context)
  const [error, setError] = useState(false);
  function myError() {
    setError(false);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/main");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
      setTimeout(myError, 4000); 
    }
  };



console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>User</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="loginButton"  type="submit"  disabled={isFetching}>Login</button>
      </form>
        <button className="loginRegisterButton">
        <a className="link" href="/register">
                Register
              </a>
        </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong! Try valid username / password</span>}
    </div>
  );
}