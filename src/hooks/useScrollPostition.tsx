import { useCallback, useEffect, useState } from "react";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleNavigation = useCallback(() => {
      const crtPos = window.scrollY;

      setIsScrolling(crtPos > scrollPosition);
      setScrollPosition(window.scrollY);
    
    }, [scrollPosition])
  
    useEffect(() => {
      const updatePosition = () => {
        const crtPos = window.scrollY;

        setIsScrolling(crtPos > scrollPosition);
        setScrollPosition(window.scrollY);
      }
      window.addEventListener("scroll", handleNavigation);
      // updatePosition();
      return () => window.removeEventListener("scroll", handleNavigation);
    }, [handleNavigation]);
  
    return {scrollPosition, isScrolling};
  };
  
  export default useScrollPosition;