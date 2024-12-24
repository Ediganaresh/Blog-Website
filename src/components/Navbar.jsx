import React from "react";
import image from "./image";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IKImage } from "imagekitio-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState();
  return (
    <div className="w-full h-16 md:h-20 flex item-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex item-ccentergap-4 text-2xl font-bold">
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
          // path="/logo.png"
          src="https://ik.imagekit.io/ihetkdnj4/logo.png"
          className="w-8 h-8"
          alt=""
        />
        {/* <Image src="logo.png" alt="Blog Logo" w={32} h={32}/> */}
        <span>BlogItOut</span>
      </Link>
      {/* MOBILE MENU*/}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "≡"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8  font-medium text-lg absolute top-16 bg-[#e6e6ff] trasistion-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login👋
          </button>
        </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
