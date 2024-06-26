import { useState } from "react";
import "./DateInput.css";

const DateInput = ({ dateFunc }) => {
  const [dates, setDates] = useState();
  const handleDates = (e) => {
    setDates((prevDates) => ({
      ...prevDates,
      [e.target.id === "start" ? "startDate" : "finishDate"]: e.target.value,
    }));
    dateFunc(dates);
  };
  return (
    
    <div className="dateDiv">
      <div className="startDiv">
        <label form="start" className="DateToolStart">
          Start date:
          <input
            className="dateDesign"
            type="date"
            id="start"
            name="trip-start"
            min="01-01"
            max="12-31"
            onChange={handleDates}
          />
        </label>
      </div>
      <div className="finishDiv">
        <label form="finish" className="DateToolFinish">
          Finish date:
          <input
            className="dateDesign"
            type="date"
            id="finish"
            name="trip-finish"
            min="01-01"
            max="12-31"
            onChange={handleDates}
          />
        </label>
      </div>
    </div>
  );
};

export default DateInput;
