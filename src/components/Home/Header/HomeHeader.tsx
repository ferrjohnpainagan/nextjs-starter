import { useBaseComponent } from '@base/BaseComponent';
import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import {
  StyledHomeHeaderCode,
  StyledHomeHeaderLogoLink,
  StyledHomeHeaderLogoWrapper,
  StyledHomeHeaderParagraph,
  StyledHomeHeaderWrapper,
} from './HomeHeaderStyle';

export const HomeHeader = () => {
  useBaseComponent();

  return (
    <StyledHomeHeaderWrapper>
      <StyledHomeHeaderParagraph>
        Switch Theme: &nbsp;
        <StyledHomeHeaderCode>
          <ThemeSwitcher />
        </StyledHomeHeaderCode>
      </StyledHomeHeaderParagraph>
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
