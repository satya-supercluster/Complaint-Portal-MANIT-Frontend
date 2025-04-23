import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { auth, logout } = useAuth();
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const navbar = navbarRef.current;
    let navbarOffset = navbar.offsetTop;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (currentScrollY > navbarOffset && !isFixed) {
          setIsFixed(true);
        }
      } else {
        // Scrolling up
        if (currentScrollY <= navbarOffset && isFixed) {
          setIsFixed(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      navbarOffset = navbar.offsetTop;
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {
        navbarOffset = navbar.offsetTop;
      });
    };
  }, [isFixed]);

  return (
    <div>
      <div className="w-full bg-[#003366] text-white max-sm:text-sm">
        {/* Image Section */}
        <div className="max-w-[1200px] mx-auto px-2 max-sm:px-2 pt-3">
          <a href="https://www.manit.ac.in/" target="_blank">
            <img
              src="/logo/MANIT-Logo.png"
              alt="MANIT"
              className="max-sm:w-full sm:w-[70%] lg:w-[50%]"
            />
          </a>
        </div>
      </div>
      <div
        ref={navbarRef}
        className={`w-full bg-[#003366] text-white ${
          isFixed ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        {/* Sticky Navbar Section */}
        <div className="bg-[#003366]">
          <div className="max-w-[1200px] mx-auto px-2 max-sm:px-2 flex flex-col">
            <span className="py-2">
              <p className="font-bold">Complaint Management Portal</p>
            </span>
            {auth?.role === "student" ? (
              <div className="mb-3 rounded-lg px-5 max-sm:px-2 py-2 flex justify-between border-2 border-white">
                <div className="flex gap-5 max-sm:gap-2">
                  <NavLink
                    to="/student/home"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/student/profile"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/student/complaint"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Complaints
                  </NavLink>
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center"
                  onClick={logout}
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="s350:pr-1"
                  />
                  <p className="max-s350:hidden">Logout</p>
                </div>
              </div>
            ) : auth?.role === "admin" ? (
              <div className="mb-3 rounded-lg px-5 max-sm:px-2 py-2 flex justify-between border-2 border-white">
                <div className="flex gap-5 max-sm:gap-2">
                  <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/admin/complaints"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Complaints
                  </NavLink>
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center"
                  onClick={logout}
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="s350:pr-1"
                  />
                  <p className="max-s350:hidden">Logout</p>
                </div>
              </div>
            ) : 
            auth?.role === "superadmin" ? (
              <div className="mb-3 rounded-lg px-5 max-sm:px-2 py-2 flex justify-between border-2 border-white">
                <div className="flex gap-5 max-sm:gap-2">
                  <NavLink
                    to="/superadmin/admins"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Admins
                  </NavLink>
                  <NavLink
                    to="/superadmin/intermediates"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Intermediates
                  </NavLink>
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center"
                  onClick={logout}
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="s350:pr-1"
                  />
                  <p className="max-s350:hidden">Logout</p>
                </div>
              </div>
            ) :
            auth?.role === "intermediate" ? (
              <div className="mb-3 rounded-lg px-5 max-sm:px-2 py-2 flex justify-between border-2 border-white">
                <div className="flex gap-5 max-sm:gap-2">
                  <NavLink
                    to="/intermediate/complaints"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-white"
                          : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    Complaints
                  </NavLink>
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center"
                  onClick={logout}
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="s350:pr-1"
                  />
                  <p className="max-s350:hidden">Logout</p>
                </div>
              </div>
            ) 
            : null}
          </div>
        </div>
      </div>
      {/* {isFixed && (
        <div
          className="bg-blue-900"
          style={{ height: auth === null ? "50px" : "100px" }}
        ></div>
      )} */}
    </div>
  );
};

export default Navbar;
