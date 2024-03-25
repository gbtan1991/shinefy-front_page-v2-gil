import { useRef, useEffect } from "react";

export default function CalendarDate({
  dateText,
  isSelected,
  fullDateValue,
  cssClasses,
  handleSelectDate,
}) {
  const dateValue = useRef(fullDateValue);

  useEffect(() => {
    dateValue.current = fullDateValue;
  });

  const dateClicked = () => {
    if (!isSelected) {
      handleSelectDate(dateValue.current);
    } else {
      handleSelectDate("");
    }
  };

  return (
    <li
      onClick={dateClicked}
      className={`flex items-center justify-center ${cssClasses} ${
        isSelected ? "dateClicked" : ""
      }`}
    >
      <p className="flex items-center justify-center">{dateText}</p>
    </li>
  );
}
