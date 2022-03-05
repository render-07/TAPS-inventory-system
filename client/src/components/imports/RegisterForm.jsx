// import React from 'react'
// import ErrorAlert from './ErrorAlter';
// import { useLocation, useNavigate, Link } from 'react-router-dom';

// export default function RegisterForm(props) {

//     let {
//         handleSubmit,
//         setUsername,
//         setEmail,
//         setPassword,
//         setPasswordCheck,
//         errorMessage,
//         setError
//         } = props.registerState;

//     const location = useLocation();
//     const navigate = useNavigate();

//     let defaultClass = "nav-link link-btn btn-primary default-bg";
//     let active = " active"

//     const register = () => navigate("/register")
//     const login = () => navigate("/login")

//     return (
//         <div className="col-lg-6 bg-color align-self-center">
//             <div className="info-r">
//                 <div className="btn-section">
//                     <button onClick={register} className={location.pathname === "/register" ? defaultClass + active : defaultClass}>Register</button>
//                 </div>
//                 <div className="btn-section-l">
//                     <button onClick={login} className={location.pathname === "/login" ? defaultClass + active : defaultClass}>Login</button>
//                 </div>
//             </div>
//             <div className="form-section">
//                     <div className="title-r">
//                         <h1>DESIGN. DEVELOP. DEPLOY.</h1>
//                         <h5>We make it work</h5>
//                         <h4>CREATE A NEW ACCOUNT</h4>
//                     </div>
//                     <div className="login-inner-form">
//                         <form method="POST" onSubmit={handleSubmit}>

//                         <div className="form-group form-box">
//                             <input type="text" id="username" onChange={e => setUsername(e.target.value)} className="input-text" placeholder="Username" />
//                             <i className="icon user"></i>
//                         </div>

//                         <div className="form-group form-box">
//                             <input type="text" id="email" onChange={e => setEmail(e.target.value)} className="input-text" placeholder="Email" />
//                             <i className="icon email"></i>
//                         </div>

//                         <div className="form-group form-box">
//                             <input type="text" id="password" onChange={e => setPassword(e.target.value)} className="input-text" placeholder="Password" />
//                             <i className="icon lock"></i>
//                         </div>

//                         <div className="form-group form-box">
//                             <input type="text" id="passwordCheck" onChange={e => setPasswordCheck(e.target.value)} className="input-text" placeholder="Verify Password" />
//                             <i className="icon lock"></i>
//                         </div>

//                         {
//                             errorMessage && <ErrorAlert errorMessage={errorMessage} clearError={() => setError(undefined)}></ErrorAlert>
//                         }

//                         <div className="form-group">
//                             <button className="btn primary-btn">
//                                 Register
//                             </button>
//                         </div>

//                         </form>
//                     </div>
//             </div>
//         </div>
//     )
// }

import React from "react";
import ErrorAlert from "./ErrorAlter";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function RegisterForm(props) {
  let {
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck,
    errorMessage,
    setError,
  } = props.registerState;

  const location = useLocation();
  const navigate = useNavigate();

  let defaultClass = "nav-link link-btn btn-primary default-bg";
  let active = " active";

  const register = () => navigate("/register");
  const login = () => navigate("/login");

  return (
    <div className="col-lg-6 bg-color align-self-center">
      <div className="info">
        <div className="title-l">
          <h1>DESIGN. DEVELOP. DEPLOY.</h1>
          <h5>We make it work</h5>
          <h3>CREATE A NEW ACCOUNT.</h3>
        </div>
        <div className="btn-section">
          <button
            onClick={register}
            className={
              location.pathname === "/register"
                ? defaultClass + active
                : defaultClass
            }
          >
            Register
          </button>
        </div>
        <div className="btn-section-l">
          <button
            onClick={login}
            className={
              location.pathname === "/login"
                ? defaultClass + active
                : defaultClass
            }
          >
            Login
          </button>
        </div>
      </div>
      <div className="form-section">
        <div className="login-inner-form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-group form-box">
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="input-text"
                placeholder="Username"
              />
              <i className="icon user"></i>
            </div>
            <div className="form-group form-box">
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input-text"
                placeholder="Email"
              />
              <i className="icon email"></i>
            </div>
            <div className="form-group form-box">
              <input
                type="text"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-text"
                placeholder="Password"
              />
              <i className="icon lock"></i>
            </div>
            <div className="form-group form-box">
              <input
                type="text"
                id="passwordCheck"
                onChange={(e) => setPasswordCheck(e.target.value)}
                className="input-text"
                placeholder="Verify Password"
              />
              <i className="icon lock"></i>
            </div>
            {errorMessage && (
              <ErrorAlert
                errorMessage={errorMessage}
                clearError={() => setError(undefined)}
              ></ErrorAlert>
            )}
            <div className="form-group">
              <button className="btn primary-btn">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
