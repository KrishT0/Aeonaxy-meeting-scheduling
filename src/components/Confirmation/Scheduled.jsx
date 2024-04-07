import React from "react";
import profileImage from "../../assets/profile.png";
import googleImage from "../../assets/google.png";
import microsoftImage from "../../assets/microsoft.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faUser,
  faCalendar,
  faEarthAsia,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Scheduled() {
  return (
    <div className="flex flex-col p-6 w-full items-start">
      <div className="flex flex-col gap-3 m-auto w-[50%] items-center">
        <div className="mt-2 ">
          <img
            src={profileImage}
            alt="profile"
            className=" rounded-[50%] size-16 "
          />
        </div>
        <h1 className="text-2xl font-bold mt-5">
          {" "}
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#147f63" }}
          />{" "}
          You are scheduled
        </h1>
        <p className="text-sm">
          A calendar invitation has been sent to your email address.
        </p>
        <div className="border-2 border-gray-300 w-full p-4 rounded-xl flex flex-col gap-3">
          <h2 className="text-lg font-extrabold"> Fibery Demo</h2>
          <p className="text-base text-[#7d7d7d] font-semibold">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Name entered
          </p>
          <p className="text-base text-[#7d7d7d] font-semibold">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Name entered
          </p>
          <p className="text-base text-[#7d7d7d] font-semibold">
            <FontAwesomeIcon icon={faEarthAsia} className="mr-2" /> UK, Ireland,
            Lisbon Time
          </p>
          <p className="text-base text-[#7d7d7d] font-semibold">
            <FontAwesomeIcon icon={faVideo} className="mr-2" /> Name entered
          </p>
        </div>
        <hr
          className="bg-black border-black"
          style={{
            backgroundColor: "black",
            borderColor: "black",
            color: "black",
          }}
        />
        <div className="flex flex-col justify-start w-full">
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-sm  font-extrabold">
              Schedule your own meetings with Candely for free
            </p>
            <p className="text-sm">
              Eliminate the back-and-forth emails for finding time.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full items-center mt-5">
          <div className="flex justify-between w-full">
            <button className="border border-black rounded-3xl h-10 text-xs w-[48%]">
              <div className="flex gap-2 items-center justify-center ">
                <img src={googleImage} alt="google" className="size-5" />
                <p>Sign up with Google</p>
              </div>
            </button>
            <button className="border border-black rounded-3xl h-10 text-xs w-[48%]">
              <div className="flex gap-2 items-center justify-center ">
                <img src={microsoftImage} alt="microsoft" className="size-5" />
                <p>Sign up with Microsoft</p>
              </div>
            </button>
          </div>
          <p className="text-blue-500 text-sm">Sign up with work email</p>
        </div>
      </div>
      <div className="text-blue-500 text-sm">Cookie settings</div>
    </div>
  );
}

export default Scheduled;
