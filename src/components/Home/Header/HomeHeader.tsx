import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import {
  StyledHomeHeaderCode,
  StyledHomeHeaderTextWrapper,
  StyledHomeHeaderWrapper,
} from './HomeHeaderStyle';

export const HomeHeader = () => {
  return (
    <StyledHomeHeaderWrapper>
      <StyledHomeHeaderTextWrapper>
        <StyledHomeHeaderCode>
          <ThemeSwitcher />
        </StyledHomeHeaderCode>
      </StyledHomeHeaderTextWrapper>
    </StyledHomeHeaderWrapper>
  );
};
