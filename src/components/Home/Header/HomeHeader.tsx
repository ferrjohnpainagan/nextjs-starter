import { useBaseComponent } from '@base/BaseComponent';
import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import { logoutUser } from '@redux/slices/authentication/AuthenticationSlice';
import { StyledHomeHeaderWrapper } from './HomeHeaderStyle';

export const HomeHeader = () => {
  const { dispatch } = useBaseComponent();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <StyledHomeHeaderWrapper>
      <ThemeSwitcher />
      <button
        className="bg-violet-500 rounded px-2 py-1 text-white font-semibold"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </StyledHomeHeaderWrapper>
  );
};
