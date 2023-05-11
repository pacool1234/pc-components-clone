import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { getUserInfo, user, token, logout } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo();
    console.log(user.name);
  }, [user]);

  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login')
  //   }
  // }, [token])

  return (
    <>
      <Header />
      <h1>User Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <span>
        <button onClick={logout} className="btn btn-primary">Log out</button>
      </span>
    </>
  );
};

export default Profile;
