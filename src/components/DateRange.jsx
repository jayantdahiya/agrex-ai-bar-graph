import React, { useContext, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AppContext } from "../App";

function DateRange() {
  const { setStartDate, setEndDate, startDate, endDate } =
    useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
      <p className="text-2xl font-bold text-center">Date Range Filter</p>
      <div className="flex flex-row items-center">
        <p className="text-lg font-thin">Start Date:</p>
        <div className="border-2 border-gray-400 rounded-md">
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <p className="text-lg font-thin">End Date: </p>
        <div className="border-2 border-gray-400 rounded-md">
          <DatePicker
            showIcon
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
    </div>
  );
}

export default DateRange;
