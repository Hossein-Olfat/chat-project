function Validication_form(type, value) {
  const Password_pattern = [
    /[a-z]/g,
    /[A-Z]/g,
    /[0-9]/g,
    /[^A-Za-z0-9]/g,
    /^.{8,}$/,
    /^.{1,20}$/,
  ];
  // email
  if (type === "email") {
    if (value.email[0] === "") {
      value.email[1].error_status = true;
      value.email[1].error_text = "please fill email input";
    } else if (
      value.email[0].match(
        /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
      ) === null
    ) {
      value.email[1].error_status = true;
      value.email[1].error_text = "please enter a valid email";
      value.email[1].show_error = true;
    } else {
      value.email[1].error_status = false;
      value.email[1].error_text = "";
      value.email[1].show_error = false;
    }
    // password
  } else if (type === "password") {
    if (value.password[0] === "") {
      value.password[1].error_status = true;
      value.password[1].error_text[0].error = true;
      value.password[1].error_text[1].forEach((Each) => {
        Each.error = false;
      });
    } else {
      value.password[1].error_text[0].error = false;
      for (let i = 1; i < value.password[1].error_text[1].length; i++) {
        if (value.password[0].match(Password_pattern[i]) !== null) {
          value.password[1].error_text[1][i].error = false;
        } else {
          value.password[1].error_text[1][i].error = true;
        }
      }
      const errors_status_password = value.password[1].error_text[1].every(
        (Each) => {
          return Each.error === false;
        }
      );
      errors_status_password === true
        ? (value.password[1].show_error = false)
        : (value.password[1].show_error = true);
    }
  }
}

export default Validication_form;
