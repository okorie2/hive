import React, { useEffect } from "react";
import { useRef } from "react";
export default function UseOutsideAlerter(ref) {
  useEffect(() => {
    console.log("started");
    const handleClickOutside = () => {
      if (ref.current && ref.current.contain(e.target)) {
        console.log("clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
