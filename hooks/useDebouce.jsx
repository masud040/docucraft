import { useEffect, useRef } from "react";

const useDebouce = (callback, delay) => {
  let timeoutIdRef = useRef(null);
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);
  const debouceCallback = (...args) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debouceCallback;
};

export default useDebouce;
