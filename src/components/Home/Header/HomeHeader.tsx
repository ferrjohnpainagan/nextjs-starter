import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import { StyledHomeHeaderWrapper } from './HomeHeaderStyle';

export const HomeHeader = () => {
  return (
    <StyledHomeHeaderWrapper>
      <ThemeSwitcher />
    </StyledHomeHeaderWrapper>
  );
};
