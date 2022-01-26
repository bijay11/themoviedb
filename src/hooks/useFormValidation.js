import { useState, useEffect } from "react";

const useFormValidation = () => {
  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });
  const [signinFormValues, setSigninFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const validateLoginForm = () => {
    const errors = {};

    if (loginFormValues.email === "") {
      errors.email = "Email cannot be empty";
    }
    if (loginFormValues.password === "") {
      errors.password = "Password cannot be empty";
    }
    return errors;
  };
  const validateSigninForm = () => {
    const errors = {};

    if (signinFormValues.fullName === "") {
      errors.fullName = "Full Name cannot be empty";
    }
    if (signinFormValues.email === "") {
      errors.email = "Email cannot be empty";
    }
    if (signinFormValues.password === "") {
      errors.password = "Password cannot be empty";
    }
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validateLoginForm());
    setIsSubmitted(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors(validateSigninForm());
    setIsSubmitted(true);
  };
  const testAuth = () => {
    console.log("test auth");
    setIsAuth(true);
  };

  useEffect(() => {
    isSubmitted && Object.keys(errors).length < 1 && testAuth();
  }, [errors]);
  return {
    loginFormValues,
    setLoginFormValues,
    errors,
    setErrors,
    isSubmitted,
    setIsSubmitted,
    showPassword,
    setShowPassword,
    handleInputChange,
    validateLoginForm,
    handleLogin,
    handleRegister,
    isAuth,
    setIsAuth,
    testAuth,
  };
};
export default useFormValidation;
