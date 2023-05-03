import { useBaseComponent } from '@base/BaseComponent';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { IThemeSwitcherProps, IThemeSwitcherState } from './ThemeSwitcherType';

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();
  const { state, setState } = useBaseComponent<
    IThemeSwitcherProps,
    IThemeSwitcherState
  >({
    props,
    initialState: { mounted: false },
  });
  const { mounted } = state;

  useEffect(() => {
    setState({ mounted: true });
  }, []);

  if (!mounted) return null;
  const currentTheme = theme;
  return (
    <select
      onChange={(e) => {
        console.log(e.target.value);
        setTheme(e.target.value);
      }}
    >
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};
