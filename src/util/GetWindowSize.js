import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: window_width, innerHeight: window_height } = window;
  return {
    window_height,
    window_width,
  };
}

export function GetWindowSize() {
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

    return windowDimensions;
}

export default GetWindowSize;

// import useWindowDimensions from "../../util/Wndowsize";
// const { height, width } = useWindowDimensions();
// !INGEJ AVAARAI!
