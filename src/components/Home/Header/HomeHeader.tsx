import { useBaseComponent } from '@base/BaseComponent';
import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import {
  StyledHomeHeaderCode,
  StyledHomeHeaderLogoLink,
  StyledHomeHeaderLogoWrapper,
  StyledHomeHeaderTextWrapper,
  StyledHomeHeaderWrapper,
} from './HomeHeaderStyle';

export const HomeHeader = () => {
  useBaseComponent();

  return (
    <StyledHomeHeaderWrapper>
      <StyledHomeHeaderTextWrapper>
        Switch Theme: &nbsp;
        <StyledHomeHeaderCode>
          <ThemeSwitcher />
        </StyledHomeHeaderCode>
      </StyledHomeHeaderTextWrapper>
      <StyledHomeHeaderLogoWrapper>
        <StyledHomeHeaderLogoLink
          href="https://github.com/MamadKamalipour"
          target="_blank"
          rel="noopener noreferrer"
        >
          By MamadKamalipour
        </StyledHomeHeaderLogoLink>
      </StyledHomeHeaderLogoWrapper>
    </StyledHomeHeaderWrapper>
  );
};
