import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUNDIMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleChange = () => {
    console.log(email.current.value, password.current.value);
    const validate = checkValidateData(
      email.current.value,
      password.current.value
    );
    // console.log("validate: ", validate);
    setErrorMessage(validate);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            photoURL: USER_AVATAR,
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log("user: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user: ", user);
          console.log("User Signed In Successfully");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute ">
        <img
          className="object-cover w-screen h-screen"
          src={BACKGROUNDIMG}
          alt="background logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="my-36 mx-auto right-0 left-0 w-full sm:w-96 absolute p-12 bg-black bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={name}
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
          ref={email}
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

        <p className=" mx-4 p-2 text-red-400 ">{errorMessage}</p>

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
