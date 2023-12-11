import React, { useRef, useState } from "react";
import Header from "./Header";

import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef();
  const password = useRef();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleChange = () => {
    // console.log(email.current.value, password.current.value);
    const validate = checkValidateData(email.current.value, password.current.value)
    console.log('validate: ', validate);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute ">
        <img
          className="object-cover w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background logo"
        />
      </div>

      <form onSubmit={(e)=> e.preventDefault()}
        action=""
        className="my-36 mx-auto right-0 left-0 w-full sm:w-96 absolute p-12 bg-black bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            className="m-4 p-2 bg-gray-200 text-black w-[250px] rounded"
            type="text"
            name=""
            id=""
            placeholder="Full Name"
          />
        ) : (
          ""
        )}
        <input
          className="m-4 p-2 bg-gray-200 text-black w-[250px] rounded"
          ref = {email}
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          className="m-4 p-2 bg-gray-200 text-black w-[250px] rounded"
          ref={password}
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <button
          className="m-4 p-2 bg-red-600 font-bold  w-[250px] rounded"
          onClick={handleChange}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer p-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
