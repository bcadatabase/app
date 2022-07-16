import React from "react";


import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import OTP from "views/auth/OTP.js";
export default function Auth(props) {
  if(props.subPage === "RegisterPage"){
    return (
      <>
        <main>
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
              className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/register_bg_2.png").default + ")",
              }}
            ></div>
            <Register page={props.page} />  
          </section>
        </main>
      </>
    );
  }if (props.subPage === "LoginPage") {
    return (
      <>
        <main>
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
              className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/register_bg_2.png").default + ")",
              }}
            ></div>
            <Login page={props.page}  />
  
          </section>
        </main>
      </>
    );    
  } else {
    return (
      <>
        <main>
          <section className="relative w-full h-full py-40 min-h-screen">
            <div
              className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/register_bg_2.png").default + ")",
              }}
            ></div>
            <OTP page={props.page}  />
  
          </section>
        </main>
      </>
    );
    
  }  
}
