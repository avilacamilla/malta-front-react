import { useCallback } from 'react';

interface UseHomeProps {
  onButtonClick: () => void;
}

const useHome = (): UseHomeProps => {
  const onButtonClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return {
    onButtonClick,
  };
};

export default useHome;
