import { useForm } from "react-hook-form";
import { daysOfMonth } from "../helpers";

import arrow from "../assets/images/icon-arrow.svg";
import classes from "./BirthDateForm.module.scss";

const BirthDateForm = ({ onSetBirthDate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const thisYear = new Date().getFullYear();

  const formSubmitHandler = ({ day, month, year }) => {
    const birthDate = {
      day,
      month,
      year,
    };
    onSetBirthDate(birthDate);
  };

  return (
    <>
      <form
        className={classes["date__form"]}
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <div className={classes["form__inputs--mobile"]}>
          <div
            className={`${classes.inputs} ${
              errors.day ? classes.invalid : null
            }`}
          >
            <label htmlFor="day">Day</label>
            <input
              type="number"
              id="day"
              placeholder="DD"
              {...register("day", {
                required: true,
                min: 1,
                max: 31,
                validate: (value, values) => {
                  return !values.month
                    ? true
                    : daysOfMonth[values.month - 1] < value
                    ? false
                    : true;
                },
              })}
            />
            {errors.day?.type === "required" && <p>This field is required</p>}
            {(errors.day?.type === "min" || errors.day?.type === "max") && (
              <p>Must be a valid day</p>
            )}
            {errors.day?.type === "validate" && <p>Must be a valid date</p>}
          </div>
          <div
            className={`${classes.inputs} ${
              errors.month ? classes.invalid : null
            }`}
          >
            <label htmlFor="day">Month</label>
            <input
              type="number"
              id="month"
              placeholder="MM"
              {...register("month", { required: true, min: 1, max: 12 })}
            />
            {errors.month?.type === "required" && <p>This field is required</p>}
            {(errors.month?.type === "min" || errors.month?.type === "max") && (
              <p>Must be a valid month</p>
            )}
          </div>
          <div
            className={`${classes.inputs} ${
              errors.year ? classes.invalid : null
            }`}
          >
            <label htmlFor="day">Year</label>
            <input
              type="number"
              id="year"
              placeholder="YYYY"
              {...register("year", { required: true, max: thisYear })}
            />
            {errors.year?.type === "required" && <p>This field is required</p>}
            {errors.year?.type === "max" && <p>Must be in the past</p>}
          </div>
        </div>
        <div className={classes["btn--wrapper"]}>
          <button>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </form>
    </>
  );
};

export default BirthDateForm;
