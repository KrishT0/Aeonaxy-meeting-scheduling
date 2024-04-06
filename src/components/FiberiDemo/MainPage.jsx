import React from "react";
import CustomCalendar from "../Calendar/Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEarthAsia,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import fiberyLogo from "../../assets/fibery.png";

function MainPage() {
  return (
    <div className=" h-[550px]  m-auto max-w-4xl  bg-white rounded-xl flex ">
      <div className="border rounded-l-xl w-1/2 flex flex-col">
        <div className="h-1/3 flex items-center justify-center">
          <img src={fiberyLogo} alt="fibery logo" className="size-44 " />
        </div>
        <div className="border-t-2 p-8 flex flex-col justify-between h-full">
          <div className="flex flex-col justify-between gap-4">
            <h1 className="text-2xl font-bold  ">Fibery MainPage</h1>
            <div className="text-[#767676] text-sm font-semibold">
              <FontAwesomeIcon icon={faClock} /> 45 min
            </div>
            <p className="font-medium text-sm ">
              Book a meeting with our fibery team. talk to a real person about
              how to get your processes set up with us 🦄 or not 💩
            </p>
          </div>
          <p className="text-blue-500 text-xs font-medium">Cookie settings</p>
        </div>
      </div>
      <div className="border rounded-r-xl w-1/2 p-8">
        <div className="flex flex-col gap-4">
          <p className="text-xl pl-2">Select a Date & Time</p>
          <CustomCalendar />
        </div>
        <div className="pl-2 mt-8 ">
          <div className="font-bold text-base">Time zone</div>
          <div className="font-medium text-sm flex items-center gap-3 mt-3">
            <FontAwesomeIcon icon={faEarthAsia} className="text-sm" />
            <p>UK, Ireland, Lisbon Time (16:54)</p>
            <FontAwesomeIcon icon={faSortDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
