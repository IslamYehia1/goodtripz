import { useEffect, useState } from "react";
export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 790) setIsMobile(true);
        function checkSize() {
            if (window.innerWidth <= 790) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener("resize", checkSize);
    }, []);
    return isMobile;
}
