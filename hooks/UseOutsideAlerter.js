import React, { useEffect, useState } from "react";

export default function UseOutsideAlerter(ref) {
  const [state, setState] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref?.current && !ref?.current?.contains(e.target)) {
        setState(true);
        console.log(state, "clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { state, setState };
}
