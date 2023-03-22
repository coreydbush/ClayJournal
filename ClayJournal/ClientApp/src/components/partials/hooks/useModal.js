import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggleLogOut() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggleLogOut,
  }
};

export default useModal;