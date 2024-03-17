import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

import styled from "styled-components";

const StyleCalendar = styled(Calendar)`
  .react-calendar__tile--active {
    background-color: red;
    color: white;
  }
`;

function Calendario() {
  const [date, setDate] = useState(new Date());

  const getTileClassName = ({ date }) => {
    if (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    ) {
      return "selected";
    }
    return null;
  };

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="">
      <StyleCalendar
        className="w-[500px] h-[400px]  rounded-md bg-slate-200 border-none"
        onChange={onChange}
        value={date}
        titleClassName={getTileClassName}
      />
    </div>
  );
}

export default Calendario;
