import { createContext } from "react";

const MediaContext = createContext();

const MediaProvider = ({ children }) => {
  const data = {
    mediaMatch: "",
  };

  return <MediaContext.Provider value={data}>{children}</MediaContext.Provider>;
};
export { MediaProvider };
export default MediaContext;
