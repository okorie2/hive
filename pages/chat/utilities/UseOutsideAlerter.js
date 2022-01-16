import React, { useEffect } from "react";
export default function UseOutsideAlerter(ref) {
  useEffect(() => {
    console.log("started");
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
