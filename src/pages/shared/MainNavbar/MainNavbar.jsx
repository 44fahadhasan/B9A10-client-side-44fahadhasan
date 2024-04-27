import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/images/logo.png";
import Button from "../../../components/Button/Button";
import Tost from "../../../components/Tost/Tost";
import useAuth from "../../../hooks/useAuth";

const MainNavbar = () => {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const { userLogOut, user } = useAuth();

  const handelToggleMenu = () => {
    setToggleMenuIcon(!toggleMenuIcon);
  };

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("successfully Logout");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const userProfile = (
    <div
      className="tooltip tooltip-left"
      data-tip={user?.displayName || "Name availablen't"}
    >
      <div className=" avatar">
        <div className="w-10 rounded-full">
          <img
            className="object-cover cursor-pointer"
            alt="Profile"
            src={
              user?.photoURL ||
              "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
            }
          />
        </div>
      </div>
    </div>
  );

  const userToggle = (
    <div>
      {user ? (
        <button
          onClick={() => {
            handleLogOut();
            setToggleMenuIcon(!toggleMenuIcon);
          }}
        >
          <Button text="LOGOUT" />
        </button>
      ) : (
        <div className="flex">
          <div className="-mr-[20px] z-10">
            <Link
              to="/Login"
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
            >
              <Button
                text="LOGIN"
                bg="bg-accent-content"
                hoverBg="hover:bg-secondary"
                textColor="text-primary"
                hoverTextColor="hover:text-primary"
              />
            </Link>
          </div>

          <div>
            <Link
              to="/Register"
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
            >
              <Button
                text="REGISTER"
                textColor="text-accent-content"
                bg="bg-primary"
                hoverBg="hover:bg-secondary"
                hoverTextColor="hover:text-primary"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Tost />
      <div className="poppins  bg-base-100 flex justify-between items-center py-5 w-[95%] lg:w-auto  mx-auto container ">
        {/* logo */}
        <div className="w-[160px] sm:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="object-cover w-full" />
          </Link>
        </div>

        {/* menu for large device */}
        <div className="hidden md:block text-center">
          <ul className="flex gap-7 font-medium text-lg ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "text-primary"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="All-Art-&-Craft-Items"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "text-primary"
                }
              >
                All Art & Craft Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Add-Craft-Item"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "text-primary"
                }
              >
                Add Craft Item
              </NavLink>
            </li>
            <li>
              <NavLink
                to="My-Art-&-Craft-List"
                className={({ isActive }) =>
                  isActive ? "text-secondary" : "text-primary"
                }
              >
                My Art & Craft List
              </NavLink>
            </li>
          </ul>
        </div>

        {/* login & logout button for large device */}
        <div className="hidden md:flex items-center space-x-4 ">
          {user && userProfile}
          {userToggle}
        </div>

        {/* menu icon for mobile device */}
        <div className="md:hidden text-2xl text-primary hover:text-secondary">
          {toggleMenuIcon ? (
            <AiOutlineMenu onClick={handelToggleMenu} title="show menu" />
          ) : (
            <AiOutlineClose onClick={handelToggleMenu} title="close menu" />
          )}
        </div>
      </div>

      {/* mobile device */}
      <div
        className={`md:hidden absolute w-full mx-auto h-min bg-base-100 py-6 font-medium z-[900] border-y-2 border-base-200 ${
          toggleMenuIcon && "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 text-center">
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="All-Art-&-Craft-Items"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-primary"
              }
            >
              All Art & Craft Items
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setToggleMenuIcon(!toggleMenuIcon)}
              to="Add-Craft-Item"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-primary"
              }
            >
              Add Craft Item
            </NavLink>
          </li>
        </ul>

        {/* login & logout button for small device */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-9">
          {user && userProfile}
          {userToggle}
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
