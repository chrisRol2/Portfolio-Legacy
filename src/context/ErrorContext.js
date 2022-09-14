import { useState, createContext } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const data = {
    error: { errorForm: "", ...error },
    setError: setError,
  };

  return <ErrorContext.Provider value={data}>{children}</ErrorContext.Provider>;
};
export { ErrorProvider };
export default ErrorContext;
