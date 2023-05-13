import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { getUserInfo, user, token, logout } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo();
  }, []);
  
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token])

  if (!user) {
    return 'loading'
  }


  return (
    <>
      <Header />
      <h1>User Profile</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <p>{user.address}</p>
      <p>{user.creditCard}</p>
      <p>{user.CVC}</p>
      <p>{user.expiryDate}</p>
      <span>
        <button onClick={logout} className="btn btn-primary">Log out</button>
      </span>
    </>
  );
};

export default Profile;
