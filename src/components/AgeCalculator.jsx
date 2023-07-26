import { useState } from "react";

import BirthDateInputs from "./BirthDateInputs";
import Calculator from "./Calculator";

// eslint-disable-next-line no-unused-vars
import classes from "./AgeCalculator.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");

  return (
    <section>
      <BirthDateInputs onSetBirthDate={setBirthDate} />
      <Calculator birthDate={birthDate} />
    </section>
  );
};

export default AgeCalculator;
