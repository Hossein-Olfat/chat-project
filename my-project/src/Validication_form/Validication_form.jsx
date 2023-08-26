function Validication_form(type, value) {
  const Error_password = [
    { id: 1, text: "Lowercase letter", exist: false },
    { id: 2, text: "Uppercase letter", exist: false },
    { id: 3, text: "Number character", exist: false },
    { id: 4, text: "Minimum password length is 8 character", exist: false },
    { id: 5, text: "Maximum password length is 20 character", exist: false },
  ];

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
  } else if ((type = "password")) {
    if (value.password[0] === "") {
      value.password[1].error_text.splice(
        0,
        value.password[1].error_text.length
      );
      value.password[1].error_status = true;
      value.password[1].error_text.push({
        id: 0,
        text: "please fill password input",
      });
    } else {
      value.password[1].error_text.splice(0, 1);
      if (value.password[0].match(/[a-z]/g) !== null) {
        const sliceState = Error_password.filter((_error) => {
          return _error.id !== 1;
        });

        value.password[1].error_text.splice(
          0,
          value.password[1].error_text.length
        );
        sliceState.forEach((error) => {
          value.password[1].error_text.push(error);
        });
      } else if (value.password[0].match(/[a-z]/g) === null) {
        Error_password.push({ id: 1, text: "Lowercase letter" });
        const sliceState = Error_password;
        sliceState.forEach((error) => {
          value.password[1].error_text.push(error);
        });
      }
    }
    //  else if (value.password[0].match(/[a-z]/g) === null) {
    //   value.password[1].error_status = true;
    //   value.password[1].error_text =
    //     "The password must have one lowercase character at least";
    //   value.password[1].show_error = true;
    //   value.password[1].show_error = true;
    // } else if (value.password[0].match(/[A-Z]/g) === null) {
    //   value.password[1].error_status = true;
    //   value.password[1].error_text =
    //     "The password must have one uppercase character at least";
    //   value.password[1].show_error = true;
    // } else if (value.password[0].match(/[0-9]/g) === null) {
    //   value.password[1].error_status = true;
    //   value.password[1].error_text =
    //     "The password must have one number character at least";
    //   value.password[1].show_error = true;
    // } else if (value.password[0].match(/[^A-Za-z0-9]/g) === null) {
    //   value.password[1].error_status = true;
    //   value.password[1].error_text =
    //     "The password must have one special character at least for example( @ # $ )";
    //   value.password[1].show_error = true;
    // } else if (value.password[0].length < 8) {
    //   value.password[1].error_status = true;
    //   value.password[1].error_text =
    //     "The password must have at least 8 character";
    //   value.password[1].show_error = true;
    // } else if (value.password[0].length > 20) {
    //   value.password[1].error_status = true;
    //   value.password[1].error_text =
    //     "The password can have a maximum of 20 characters";
    //   value.password[1].show_error = true;
    // } else if (value.password[0].length >= 8) {
    //   value.password[1].error_status = false;
    //   value.password[1].error_text = "";
    //   value.password[1].show_error = false;
    // }
  }
}
///(?=(.*[0-9]))(?=.*[!@#$%^&*()-_+=~`|:;\"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ password new
//^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$ password
export default Validication_form;
