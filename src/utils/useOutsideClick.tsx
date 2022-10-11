import React from "react";
const useOutsideClick = (isActive: Boolean | undefined, callback: () => void) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event: any) => {
      console.log(isActive);
      if (isActive && ref.current && !(ref.current as Node).contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, isActive]);

  return ref;
};
export default useOutsideClick;
