import { useState, useEffect } from "react";

const useDisable = (time) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsDisabled(true);
        console.log('done')
    }, time);

    return () => clearTimeout(timer);
  }, [time]);

  return isDisabled;
};

export default useDisable;