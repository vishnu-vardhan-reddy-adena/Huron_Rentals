import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../../utils/AuthContext";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";

export const Title = () => {
  return (
    <>
      <div>
        <div>
          <ul className="flex justify-center ml-2">
            <li>
              <Link to="/">
                <img
                  className="w-[100px] h-[70px] rounded-xl"
                  src={Logo}
                  alt="logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <h1 className="text-2xl font-bold ml-2 mt-3  hover:text-violet-400 duration-200 cursor-pointer">
                  Huron Rentals
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
const reload = () => {
  window.location.reload();
};
const Header = () => {
  const CartItems = useSelector((store) => store.cart.items);

  const { isLoggedIn, username } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? (
        <div className="m-2 sticky top-2 ">
          <div className="pb-2 pl-4 rounded-xl header sticky  bg-white shadow-lg flex items-end justify-between px-8 py-02">
            <Title />

            <div>
              <nav className="nav font-semibold text-lg flex justify-end">
                <ul className="flex items-stretch">
                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer active">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer active">
                    <Link to="/automobile">Automobiles</Link>
                  </li>

                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer">
                    <Link to="/Aboutus">About Us</Link>
                  </li>
                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer">
                    <Link to="/contactus">Contact</Link>
                  </li>
                </ul>
                <div className="relative px-4  flex justify-between items-center bg-white">
                  <Link
                    className="block p-4 mr-5 mb-2  mx-2 leading-loose text-lg text-center font-semibold  bg-gray-50 hover:bg-gray-300 rounded-xl"
                    to="/"
                    onClick={reload}
                  >
                    Log Out
                  </Link>

                  <Link to="/EditCustomer">
                    <Stack direction="row" spacing={2}>
                      <Avatar sx={{ bgcolor: deepPurple[500], ml: 3, pm: 4 }}>
                        {username.username[0] + username.username[1]}
                      </Avatar>
                    </Stack>
                  </Link>
                  <Link to="/cartPage">
                    <button
                      type="button"
                      className=" overflow-hidden border-5 border-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="currentColor"
                        className="bi bi-cart4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                      </svg>
                      <div
                        style={{
                          color: "black",
                          width: "1.5rem",
                          height: "1.5rem",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        {CartItems.length}
                      </div>
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-2 sticky top-2 ">
          <div className="pb-2 pl-4 rounded-xl header sticky  bg-white shadow-lg flex items-end justify-between px-8 py-02">
            <Title />

            <div>
              <nav className="nav font-semibold text-lg flex justify-end">
                <ul className="flex items-stretch">
                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer active">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer active">
                    <Link to="/automobile">Automobiles</Link>
                  </li>

                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer">
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500  cursor-pointer">
                    <Link to="/contactus">Contact</Link>
                  </li>
                </ul>
                <div className="relative px-4  flex justify-between items-center bg-white">
                  <Link
                    className="block p-4 mb-2  mx-2 leading-loose text-lg text-center font-semibold  bg-gray-50 hover:bg-gray-300 rounded-xl"
                    to="/signIn"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="block p-4 mb-2 mx-2 leading-loose text-lg text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                    to="signUp"
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
