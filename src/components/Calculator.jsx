import CountUp from "react-countup";
import { monthDays } from "./AgeCalculator";

import classes from "./Calculator.module.scss";

const Calculator = ({ birthDate: date }) => {
  const today = new Date();
  const birthDate = new Date(`${date?.month}/${date?.day}/${date?.year}`);

  const years = calculateYear(today, birthDate);
  const months = calculateMonths(today, birthDate);
  const days = calculateDays(today, birthDate);

  return (
    <div className={classes["age-section"]}>
      <p>
        <span>{date ? <CountUp end={years} /> : "--"}</span> years
      </p>
      <p>
        <span>{date ? <CountUp end={months} /> : "--"}</span> months
      </p>
      <p>
        <span>{date ? <CountUp end={days} /> : "--"}</span> days
      </p>
    </div>
  );
};

const calculateYear = (today, birthDate) => {
  let years;

  if (
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() == birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())
  ) {
    years = today.getFullYear() - birthDate.getFullYear();
  } else {
    years = today.getFullYear() - birthDate.getFullYear() - 1;
  }
  return years;
};

const calculateMonths = (today, birthDate) => {
  let months;

  if (today.getDate() >= birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth();
  } else if (today.getDate() < birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth() - 1;
  }

  months = months < 0 ? months + 12 : months;
  return months;
};

const calculateDays = (today, birthDate) => {
  let days;

  if (today.getDate() >= birthDate.getDate()) {
    days = today.getDate() - birthDate.getDate();
  } else {
    days =
      today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
  }
  return days;
};

export default Calculator;
