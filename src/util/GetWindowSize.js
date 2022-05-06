import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: window_width, innerHeight: window_height } = window;
  return {
    window_height,
    window_width,
  };
};

export const GetWindowSize = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (props === "isDevice") {
    if (windowDimensions.window_width > 960) return "Desktop";
    else if (windowDimensions.window_width > 540) return "Tablet";
    else return "Mobile";
  }
  else return windowDimensions;
};

export default GetWindowSize;

// import useWindowDimensions from "../../util/Wndowsize";
// const { height, width } = useWindowDimensions();
// !INGEJ AVAARAI!
