import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const bind = {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
  };

  return [value, bind];
};

export default useInput;
