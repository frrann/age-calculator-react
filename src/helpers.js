export const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const calculateYear = (today, birthDate) => {
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

export const calculateMonths = (today, birthDate) => {
  let months;

  if (today.getDate() >= birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth();
  } else if (today.getDate() < birthDate.getDate()) {
    months = today.getMonth() - birthDate.getMonth() - 1;
  }

  months = months < 0 ? months + 12 : months;
  return months;
};

export const calculateDays = (today, birthDate) => {
  let days;

  if (today.getDate() >= birthDate.getDate()) {
    days = today.getDate() - birthDate.getDate();
  } else {
    days =
      today.getDate() - birthDate.getDate() + daysOfMonth[birthDate.getMonth()];
  }
  return days;
};
