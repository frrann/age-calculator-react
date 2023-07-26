import classes from "./Attribution.module.scss";

const Attribution = () => {
  return (
    <div className={classes.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/frrann">Fran M</a>.
    </div>
  );
};

export default Attribution;
