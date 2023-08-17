import CountUp from "react-countup";
import { calculateDays, calculateMonths, calculateYear } from "../helpers";

import classes from "./Calculator.module.scss";

const Calculator = ({ birthDate: date }) => {
  const today = new Date();
  const birthDate = new Date(`${date?.month}/${date?.day}/${date?.year}`);

  const years = calculateYear(today, birthDate);
  const months = calculateMonths(today, birthDate);
  const days = calculateDays(today, birthDate);

  return (
    <div className={classes["calculator"]}>
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

export default Calculator;
