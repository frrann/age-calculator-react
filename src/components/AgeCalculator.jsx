import { useState } from "react";

import BirthDateForm from "./BirthDateForm";
import Calculator from "./Calculator";

// eslint-disable-next-line no-unused-vars
import classes from "./AgeCalculator.module.scss";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");

  return (
    <section>
      <BirthDateForm onSetBirthDate={setBirthDate} />
      <Calculator birthDate={birthDate} />
    </section>
  );
};

export default AgeCalculator;
