const checkValidData = (fullName, email, password) => {
  const isFullName =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullName
    );
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isFullName !== undefined && !isFullName)
    return Error("Full Name is not valid");
  if (!isEmailValid) return Error("EmailID is not valid");
  if (!isPasswordValid) return Error("Password is not valid");

  return null;
};

export default checkValidData;
