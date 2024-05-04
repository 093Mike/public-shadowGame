import { useState, useEffect } from 'react';

function Orientation() {
  let mql = window.matchMedia("(orientation: portrait)");

  const [isLandscape, setIsLandscape] = useState(!mql.matches);

  function doOnOrientationChange(e) {
    setIsLandscape(!mql.matches);
  }

  useEffect(() => {
    mql.addEventListener("change", doOnOrientationChange);
  }, []);

  useEffect(() => {
    console.log("Orientation changed to  ", isLandscape ? "LANDSCAPE" : "PORTRAIT");
  }, [isLandscape]);

  return isLandscape;
}

export default Orientation;