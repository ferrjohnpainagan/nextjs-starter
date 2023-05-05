import { useBaseComponent } from '@base/BaseComponent';
import { LanguageSwitcher } from '@components/Shared/LanguageSwicher/LanguageSwitcher';
import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import {
  StyledHomeHeaderCode,
  StyledHomeHeaderLogoLink,
  StyledHomeHeaderLogoWrapper,
  StyledHomeHeaderTextWrapper,
  StyledHomeHeaderWrapper,
} from './HomeHeaderStyle';

export const HomeHeader = () => {
  const { translate } = useBaseComponent({
    chain: 'common',
  });
  return (
    <StyledHomeHeaderWrapper>
      <StyledHomeHeaderTextWrapper>
        {translate('theme.switch-theme')} &nbsp;
        <StyledHomeHeaderCode>
          <ThemeSwitcher />
        </StyledHomeHeaderCode>
        <StyledHomeHeaderCode>
          <LanguageSwitcher />
        </StyledHomeHeaderCode>
      </StyledHomeHeaderTextWrapper>
      <StyledHomeHeaderLogoWrapper>
        <StyledHomeHeaderLogoLink
          href="https://github.com/MamadKamalipour"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate('author')}
        </StyledHomeHeaderLogoLink>
      </StyledHomeHeaderLogoWrapper>
    </StyledHomeHeaderWrapper>
  );
};
