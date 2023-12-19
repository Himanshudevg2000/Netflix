import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log("user: ", user);

  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen z-40 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-4 cursor-pointer">
          <img
            className="w-12 h-12"
            src={"https://avatars.githubusercontent.com/u/103045944?v=4"}
            alt="UserIcon"
          />
          <button
            onClick={handleSignout}
            className="font-bold text-white"
          >{`(SignOut)`}</button>
        </div>
      )}
    </div>
  );
};

export default Header;
