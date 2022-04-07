import{ useContext, useEffect} from "react";
import { ModalContext } from "../context/modalContext";

export default function UseOutsideAlerter(ref:React.MutableRefObject<HTMLDivElement>) {
  // const { state, setState } = useState(false);
  const { state, setState } = useContext(ModalContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref?.current && !ref?.current?.contains(e.target)) {
        setState(!state);
        console.log("clicked outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { state, setState };
}
