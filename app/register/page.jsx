import Image from "next/image";
import React from "react";
import registerationBanner from "@/public/registerationBanner.jpg";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiAutoRepair } from "react-icons/gi";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col sm:flex-row gap-8 p-4 bg-[#132B3E] rounded-lg">
        <form className=" p-2 flex flex-col justify-between gap-4 text-white bg-[url('/public/registerationBanner.jpg')]">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Join Our Team!
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="caret-blue-300 p-4 border rounded-lg text-black outline-none"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" id="lastName">
              Last Name
            </label>
            <input
              type="text"
              className="caret-blue-300 p-4 border rounded-lg text-black outline-none"
            ></input>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" id="email">
              Email
            </label>
            <input
              type="email"
              className="caret-blue-300 p-4 border rounded-lg text-black outline-none"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" id="password">
              Password
            </label>
            <input
              type="password"
              className="caret-blue-300 p-4 border rounded-lg text-black outline-none"
            ></input>
          </div>

          <button
            type="submit"
            className="p-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col items-center rounded-lg">
          <Image
            src={registerationBanner}
            alt="registeration_banner"
            className="w-64 opacity-60 rounded-lg"
          />
          <div className="flex flex-col self-start mt-4 sm:text-2xl select-none text-gray-300">
            <ul>
              <li className="flex gap-2 items-center hover:text-indigo-500">
                <MdOutlineAnalytics className="w-8 h-8 animate-[pulse_3s_linear_infinite]" />
                <span className="">Data Analytics</span>
              </li>
              <li className="flex gap-2 items-center mt-2 sm:mt-4 ml-8 sm:ml-0 hover:text-purple-500">
                <AiOutlineSchedule className="w-8 h-8 animate-[bounce_4s_linear_infinite]" />
                <span>Scheduling</span>
              </li>
              <li className="flex gap-2 items-center mt-2 sm:mt-4 ml-16 sm:ml-0 hover:text-pink-500">
                <GiAutoRepair className="w-8 h-8 animate-[spin_8s_linear_infinite]" />
                <span>Maintaining</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
