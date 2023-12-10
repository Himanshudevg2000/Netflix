import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="object-contain"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background logo"
        />
      </div>

      <form
        action=""
        className="my-36 mx-auto right-0 left-0 w-3/12 absolute p-12 bg-black bg-opacity-80 text-white "
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
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          className="m-4 p-2 bg-gray-200 text-black w-[250px] rounded"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <button className="m-4 p-2 bg-red-600 font-bold  w-[250px] rounded">
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
