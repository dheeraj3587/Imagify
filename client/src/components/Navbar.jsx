import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [logged, setLogged] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogged(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between py-4">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      {/* User Information or Login */}
      <div>
        {logged ? (
          <div className="flex items-center gap-4">
            {/* Credit and Username */}
            <button className="flex items-center gap-2">
              <img className="w-5" src={assets.credit_star} alt="Credit Star" />
              <p>Credit left: 50</p>
            </button>
            <p className="hidden sm:block">Hi, Dheeraj Joshi</p>

            <div className="relative group">
              <img
                src={assets.user}
                className="w-10 drop-shadow rounded-full cursor-pointer"
                alt="User Avatar"
              />
              <div className="absolute hidden group-hover:block top-12 right-0 bg-white z-10 text-black shadow-lg rounded px-4 py-2">
                <ul>
                  <li
                    onClick={handleLogout}
                    className="cursor-pointer hover:text-red-600"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer hover:underline"
            >
              Pricing
            </p>
            <button
              onClick={() => navigate("/login")}
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
