import { useTheme } from 'next-themes';
import { useEffect } from 'react';
export const useThemeSwitcherHelper = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, []);

  const themeToggleHandler = (isChecked: boolean) => {
    if (!isChecked) {
      return setTheme('light');
    }
    setTheme('dark');
  };
  return {
    themeToggleHandler,
  };
};
