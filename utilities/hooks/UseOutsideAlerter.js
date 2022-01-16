import React, { useEffect, useState } from "react";
import UseModalState from "./UseModalState";

export default function UseOutsideAlerter(ref) {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("started");
    const handleClickOutside = (e) => {
      if (ref?.current && !ref?.current?.contains(e.target)) {
        console.log("clicked outside");
        setState(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { state, setState };
}
