import React from "react";
import useIsMobile from "./useIsMobile";
const useOutsideClick = (isActive: Boolean | undefined, callback: () => void) => {
  const ref = React.useRef();
  const isMobile = useIsMobile();
  React.useEffect(() => {
    let handleClick: any;
    if (!isMobile) {
      handleClick = (event: any) => {
        if (isActive && ref.current && !(ref.current as Node).contains(event.target)) {
          callback();
        }
      };
      document.addEventListener("click", handleClick, true);
    }
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, isActive, isMobile]);

  return ref;
};
export default useOutsideClick;
