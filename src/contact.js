// const normalizeResponse = (response) => {
//     const isSuccess = response.status === "mail_sent";
//     const message = response.message;
//     const validationError = isSuccess
//         ? {}
//         : Object.fromEntries(
//             response.invalid_fields.map((error) => {
//                 const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];

//                 return [key, error.message];
//             })
//         );

//     return {
//         isSuccess,
//         message,
//         validationError
//     };
// };

// export { normalizeResponse }