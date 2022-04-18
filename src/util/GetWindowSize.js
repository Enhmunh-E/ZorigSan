import { useState, useEffect } from "react";

<<<<<<< HEAD
const getWindowDimensions = () => {
=======
function getWindowDimensions() {
>>>>>>> e412503 (Made News.js & GetWindowSize.js, changed Card.js (again))
  const { innerWidth: window_width, innerHeight: window_height } = window;
  return {
    window_height,
    window_width,
  };
<<<<<<< HEAD
};

export const GetWindowSize = (props) => {
=======
}

export function GetWindowSize() {
>>>>>>> e412503 (Made News.js & GetWindowSize.js, changed Card.js (again))
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
<<<<<<< HEAD
=======

>>>>>>> e412503 (Made News.js & GetWindowSize.js, changed Card.js (again))
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

<<<<<<< HEAD
  if (props === "isDevice") {
    if (windowDimensions.window_width > 960) return "Desktop";
    else if (windowDimensions.window_width > 540) return "Tablet";
    else return "Mobile";
  }
  else return windowDimensions;
};
=======
    console.log(windowDimensions);
    return windowDimensions;
}
>>>>>>> e412503 (Made News.js & GetWindowSize.js, changed Card.js (again))

export default GetWindowSize;

// import useWindowDimensions from "../../util/Wndowsize";
// const { height, width } = useWindowDimensions();
// !INGEJ AVAARAI!
