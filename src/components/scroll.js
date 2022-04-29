import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
    const location = useLocation();
    const newLoc = location.pathname
    useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    }, [newLoc]);

    return props.children;
    };

export default ScrollToTop;
