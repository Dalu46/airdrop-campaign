import { useState, useEffect } from "react";

const useEnable = (time) => {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsEnabled(false);
        console.log('done')
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  return isEnabled;
};

export default useEnable;