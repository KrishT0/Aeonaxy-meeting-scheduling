import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEarthAsia,
  faSortDown,
  faArrowLeft,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import fiberyLogo from "../../assets/fibery.png";
import TimeSelector from "../TimeSelection/TimeSelector";
import Form from "../FinalForm/Form";
import Scheduled from "../Confirmation/Scheduled";
import Calendar from "../Calendar/Calendar2";

function MainPage() {
  const [date, setDate] = useState(new Date());
  const [openFinalForm, setOpenFinalForm] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [topDetail, setTopDetail] = useState(null);
  const [bottomDetail, setBottomDetail] = useState(null);
  const [openConfimation, setOpenConfimation] = useState(false);
  const [name, setName] = useState("");
  const [finaltime, setFinalTime] = useState("");

  const handleOpenConfirmation = () => {
    setOpenConfimation((prev) => !prev);
  };

  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  function addMinutes(time, minutes) {
    const [hours, mins] = time.split(":").map(Number);
    const totalMins = hours * 60 + mins;
    const newTotalMins = totalMins + minutes;
    const newHours = Math.floor(newTotalMins / 60);
    const newMins = newTotalMins % 60;
    return `${padZero(newHours)}:${padZero(newMins)}`;
  }

  const handleOpenFinalForm = () => {
    setOpenFinalForm((prev) => !prev);
    console.log(date);

    let topTime = selectedTime
      ? `${selectedTime} - ${addMinutes(selectedTime, 45)}`
      : null;

    let topDay = date ? date.split(",")[0] : null;
    setTopDetail(`${topTime}, ${topDay},`);

    let bottomDate = date ? date.split(",")[1] : null;
    let bottomYear = date ? date.split(",")[2] : null;
    setBottomDetail(`${bottomDate}, ${bottomYear}`);
    setFinalTime(`${topTime}, ${topDay}, ${bottomDate}, ${bottomYear}`);
  };

  return (
    <div
      className=" h-[550px]  m-auto max-w-4xl mt-10 bg-white rounded-xl  "
      style={{
        maxWidth: date ? "1000px" : "896px",
        height: openFinalForm ? "650px" : "550px",
        marginTop: openFinalForm ? "0px" : "40px",
      }}
    >
      {!openConfimation ? (
        <div
          className="w-full flex"
          style={{
            maxWidth: date ? "1000px" : "896px",
            height: openFinalForm ? "650px" : "550px",
            marginTop: openFinalForm ? "0px" : "40px",
          }}
        >
          <div
            className="border rounded-l-xl flex flex-col"
            style={{
              width: date ? "35%" : "50%",
            }}
          >
            <div className="h-1/3 flex items-start justify-center ">
              {openFinalForm && (
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-blue-500 rounded-[50%] border p-2 px-[10px] text-2xl mt-5 hover:cursor-pointer hover:bg-gray-100 duration-150"
                  onClick={handleOpenFinalForm}
                />
              )}
              <img src={fiberyLogo} alt="fibery logo" className="size-44 " />
            </div>
            <div className="border-t-2 p-8 flex flex-col justify-between h-full">
              <div className="flex flex-col justify-between gap-4">
                <h1 className="text-2xl font-bold  ">Fibery Demo</h1>
                <div className="text-[#767676] text-sm font-bold">
                  <FontAwesomeIcon icon={faClock} /> 45 min
                </div>
                {openFinalForm && (
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-[#777777]"
                      />
                      <div className="text-[#777777]">
                        <div className="font-bold text-sm">{topDetail}</div>
                        <div className="font-bold text-sm">{bottomDetail}</div>
                      </div>
                    </div>
                    <div className="font-bold text-sm text-[#777777] flex items-center gap-3 mt-3">
                      <FontAwesomeIcon icon={faEarthAsia} className="text-sm" />
                      <p>UK, Ireland, Lisbon Time (16:54)</p>
                    </div>
                  </div>
                )}
                <p className="font-medium text-sm">
                  Book a meeting with our fibery team. talk to a real person
                  about how to get your processes set up with us 🦄 or not 💩
                </p>
              </div>
              <p className="text-blue-500 text-xs font-medium">
                Cookie settings
              </p>
            </div>
          </div>
          {!openFinalForm ? (
            <div
              className="border-l rounded-r-xl p-8 pr-0 flex justify-center"
              style={{ width: date ? "65%" : "50%" }}
            >
              <div
                className=""
                style={{
                  width: date ? "55%" : "100%",
                }}
              >
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-bold pl-2">Select a Date & Time</p>
                  <Calendar dt={setDate} />
                </div>
                <div className="pl-2 mt-8 ">
                  <div className="font-bold text-base">Time zone</div>
                  <div className="font-medium text-sm flex items-center gap-3 mt-3">
                    <FontAwesomeIcon icon={faEarthAsia} className="text-sm" />
                    <p>UK, Ireland, Lisbon Time (16:54)</p>
                    <FontAwesomeIcon icon={faSortDown} className="pb-1" />
                  </div>
                </div>
              </div>
              {date && (
                <div className="w-[45%] ">
                  <TimeSelector
                    dt={date.toString()}
                    handleOpenFinalForm={handleOpenFinalForm}
                    setSelectedTime={setSelectedTime}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="w-[65%] overflow-y-scroll">
              <Form
                onClickOpenFinalForm={handleOpenConfirmation}
                setName={setName}
              />
            </div>
          )}
        </div>
      ) : (
        <Scheduled name={name} timeSelected={finaltime} />
      )}
    </div>
  );
}

export default MainPage;
