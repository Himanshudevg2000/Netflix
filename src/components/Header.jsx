import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removerUser } from "../utils/userSlice";
import { HEADERLOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log("user: ", user);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removerUser());
        navigate("/");
      }
    });
    // Unsubscribes when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen z-40 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={HEADERLOGO} alt="logo" />
      {user && (
        <div className="flex p-4 cursor-pointer">
          <img className="w-12 h-12" src={user.photoURL} alt="UserIcon" />
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
