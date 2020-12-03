const { useRef } = require('react');

const useCountRenders = () => {
  const renders = useRef(0);
  return renders.current++;
};

export default useCountRenders;