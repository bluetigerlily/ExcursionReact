import * as React from 'react';
import { useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';
import { Link } from "react-router-dom";
import './Login.scss'

const LOGIN_URL = '/Login';

export default function Login() {

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
   
      try {
          const response = await axios.post(LOGIN_URL,
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );

          // console.log(JSON.stringify(response?.data));
          // console.log(JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          e.preventDefault();
          setUser('');
          setPwd('');
          setSuccess(true);

      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }



  return (
    <>
    {success ? (
        <section className='loginSection'>
            <h1 className='loginTitle'>You are logged in!</h1>
            <br />
            <p className='loginPara'>
            <Link style={{textDecoration: "none", color: "black"}}  to={`/Home`}>
                Go Home
                   </Link>           
            </p>
        </section>
    ) : (
        <section className='loginSection'>
          <div className='loginContainer'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} 
            aria-live="assertive">{errMsg}</p>
            <h1 className='loginSignin'>Sign In</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder='Username'
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder='Password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button className='signinBtn'>Sign In</button>
            </form>
            <p className='needanAccount'>
                Need an Account?<br />
                <span className="linkSignup">
                <Link style={{textDecoration: "none", color: "black"}}  to={`/Register`}>
                Sign Up
                   </Link>                    
                </span>
            </p>
            </div>
        </section>
    )}
</>
)
}
      
