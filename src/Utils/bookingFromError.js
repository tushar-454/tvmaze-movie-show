const bookingFromError = (values) => {
  const errors = {};
  // for time comparison
  let currentTime = new Date();
  let inputTime = values.time.split(':');
  currentTime.setHours(inputTime[0]);
  currentTime.setMinutes(inputTime[1]);
  // name validation
  if (!values.name) {
    errors.name = {
      type: 'required',
      message: 'Name is required',
    };
  } else if (values.name.length < 3) {
    errors.name = {
      type: 'minLength',
      message: 'Name must be at least 3 characters',
    };
  } else if (values.name.length > 15) {
    errors.name = {
      type: 'maxLength',
      message: 'Name must be less than 15 characters',
    };
  } else if (!/^[a-zA-Z\s]*$/.test(values.name)) {
    errors.name = {
      type: 'pattern',
      message: 'Name must be letters only',
    };
  }
  // email validation
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Email is invalid',
    };
  }
  // date validation
  if (!values.date) {
    errors.date = {
      type: 'required',
      message: 'Date is required',
    };
  } else if (new Date(values.date).getFullYear() !== new Date().getFullYear()) {
    errors.date = {
      type: 'min',
      message: 'Year must be equal with current year',
    };
  } else if (
    new Date(values.date).getDate() < new Date().getDate() ||
    new Date(values.date).getMonth() < new Date().getMonth()
  ) {
    errors.date = {
      type: 'min',
      message: 'Date must be today or greater than today',
    };
  } else if (new Date(values.date).getDay() === 0) {
    errors.date = {
      type: 'invalid',
      message: 'Date must not be a Sunday. We are closed on Sundays',
    };
  } else if (new Date(values.date).getDay() === 6) {
    errors.date = {
      type: 'invalid',
      message: 'Date must not be a Saturday. We are closed on Saturdays',
    };
  }
  // time validation
  if (!values.time) {
    errors.time = {
      type: 'required',
      message: 'Time is required',
    };
  } else if (currentTime.getHours() < 9 || currentTime.getHours() === 23) {
    errors.time = {
      type: 'min',
      message: 'Time must be 09:00 AM - 10:59 PM. Expected we are closed.',
    };
  }

  return {
    values,
    errors,
  };
};

export default bookingFromError;
