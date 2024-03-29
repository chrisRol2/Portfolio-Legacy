import { useState, createContext } from "react";

const MediaContext = createContext();

const MediaProvider = ({ children }) => {
  const matchMediaEvent = matchMedia("(min-width: 518px)");

  const [mediaMatch, setMediaMatch] = useState(matchMediaEvent.matches);
  const [resolution, setResolution] = useState(null);

  matchMediaEvent.addEventListener("change", () => {
    setResolution(window.outerWidth);
    setMediaMatch(matchMediaEvent.matches);
  });

  // useEffect(() => {
  //   setResolution(window.outerWidth);
  // }, [window.outerWidth]);

  const data = {
    mediaMatch: mediaMatch,
    resolution: resolution,
  };

  return <MediaContext.Provider value={data}>{children}</MediaContext.Provider>;
};
export { MediaProvider };
export default MediaContext;
