import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  const handleStorage = useCallback(
    (event) => {
      if (event.key === key && event.newValue !== storedValue) {
        setValue(event.newValue || initialValue);
      }
    },
    //eslint-disable-next-line
    [storedValue]
  );

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const newValue = window.localStorage.getItem(key);
    if (JSON.stringify(storedValue) !== newValue) {
      setValue(JSON.parse(newValue) || initialValue);
    }
  });

  useEffect(() => {
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [handleStorage]);

  return [storedValue, setValue];
};

export default useLocalStorage;
