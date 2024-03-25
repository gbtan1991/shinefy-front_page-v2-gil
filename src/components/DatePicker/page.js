"use client";

import { useState, useEffect, useRef } from "react";

import CalendarDate from "./CalendarDate";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "./DatePicker.css";

export default function CustomDatePicker() {
  const [refresherState, setRefresherState] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState("");
  const currentMonth = useRef(0);

  useEffect(() => {
    setRefresherState(true);
    if (date) currentMonth.current = date.getMonth();
  }, []);

  let date = new Date();
  let currYear = date.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currentMonth.current, 1).getDay(); // getting first day of month

    let lastDateofMonth = new Date(
      currYear,
      currentMonth.current + 1,
      0,
    ).getDate(); // getting last date of month

    let lastDayofMonth = new Date(
      currYear,
      currentMonth.current,
      lastDateofMonth,
    ).getDay(); // getting last day of month

    let lastDateofLastMonth = new Date(
      currYear,
      currentMonth.current,
      0,
    ).getDate(); // getting last date of previous month

    let datesHolder = [];
    let loopIndex = 0;

    // creating li of previous month last days
    for (let i = firstDayofMonth; i > 0; i--) {
      const formatedDateValue =
        lastDateofLastMonth -
        i +
        1 +
        "-" +
        currentMonth.current +
        "-" +
        currYear;

      const isSelectedDate = selectedDateValue == formatedDateValue;

      datesHolder[loopIndex] = (
        <CalendarDate
          handleSelectDate={setSelectedDateValue}
          key={loopIndex}
          dateText={lastDateofLastMonth - i + 1}
          isSelected={isSelectedDate}
          fullDateValue={formatedDateValue}
          cssClasses={"inactive"}
        />
      );
      loopIndex++;
    }

    // creating li of all days of current month
    // adding active className to li if the current day, month, and year matched
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === date.getDate() &&
        currentMonth.current === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";

      const formatedDateValue =
        i + "-" + (currentMonth.current + 1) + "-" + currYear;

      const isSelectedDate = selectedDateValue == formatedDateValue;

      datesHolder[loopIndex] = (
        <CalendarDate
          handleSelectDate={setSelectedDateValue}
          key={loopIndex}
          dateText={i}
          isSelected={isSelectedDate}
          fullDateValue={formatedDateValue}
          cssClasses={isToday}
        />
      );
      loopIndex++;
    }

    // creating li of next month first days
    for (let i = lastDayofMonth; i < 6; i++) {
      const formatedDateValue =
        i -
        lastDayofMonth +
        1 +
        "-" +
        (currentMonth.current + 2) +
        "-" +
        currYear;

      const isSelectedDate = selectedDateValue == formatedDateValue;

      datesHolder[loopIndex] = (
        <CalendarDate
          handleSelectDate={setSelectedDateValue}
          key={loopIndex}
          dateText={i - lastDayofMonth + 1}
          isSelected={isSelectedDate}
          fullDateValue={formatedDateValue}
          cssClasses={"inactive"}
        />
      );
      loopIndex++;
    }

    return datesHolder;
  };

  const handlePrevOrNext = (prev) => {
    currentMonth.current = prev
      ? currentMonth.current - 1
      : currentMonth.current + 1;

    if (currentMonth.current < 0 || currentMonth.current > 11) {
      date = new Date(currYear, currentMonth.current, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currentMonth.current = date.getMonth(); // updating current month with new date month
      currentMonth.current = date.getMonth();
    } else {
      date = new Date(); // pass the current date as date value
    }
    setRefresherState((prev) => !prev);
  };

  return (
    <div className="calendar-container">
      <header className="mb-3">
        <p className="current-date">{months[currentMonth.current]}</p>
        <div className="icons">
          <span id="prev" onClick={() => handlePrevOrNext(true)}>
            <KeyboardArrowLeftIcon sx={{ width: "28px", height: "28px" }} />
          </span>
          <span id="next" onClick={() => handlePrevOrNext(false)}>
            <KeyboardArrowRightIcon sx={{ width: "28px", height: "28px" }} />
          </span>
        </div>
      </header>

      <div className="calendar">
        <ul className="weeks">
          <li>SUN</li>
          <li>MON</li>
          <li>TUE</li>
          <li>WED</li>
          <li>THU</li>
          <li>FRI</li>
          <li>SAT</li>
        </ul>

        <ul className="days">{renderCalendar()}</ul>
      </div>
    </div>
  );
}
