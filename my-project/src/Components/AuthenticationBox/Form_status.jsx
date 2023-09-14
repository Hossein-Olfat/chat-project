// function Form_status(type) {
//   const AuthStateValues = Object.values(AuthState);
//   const form_status = (type) => {
//     return !AuthStateValues.some((value, index) => {
//       if (typeof value !== "boolean") {
//         if (type === "Login" && index !== 2) {
//           return value[1].error_status === true;
//         } else if (type === "Register") {
//           return value[1].error_status === true;
//         }
//       }
//     });
//   };
//   return form_status;
// }
// export { Form_status };
