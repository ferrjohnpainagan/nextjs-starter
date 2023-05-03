import { ThemeSwitcher } from '@components/Shared/ThemeSwitcher/ThemeSwitcher';
import Image from 'next/image';
import {
  StyledHomeHeaderCode,
  StyledHomeHeaderLogoLink,
  StyledHomeHeaderLogoWrapper,
  StyledHomeHeaderParagraph,
  StyledHomeHeaderWrapper,
} from './HomeHeaderStyle';

export const HomeHeader = () => {
  return (
    <StyledHomeHeaderWrapper>
      <StyledHomeHeaderParagraph>
        Get started by editing&nbsp;
        <StyledHomeHeaderCode>src/pages/index.tsx</StyledHomeHeaderCode>
      </StyledHomeHeaderParagraph>
      <StyledHomeHeaderLogoWrapper>
        <StyledHomeHeaderLogoLink
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </StyledHomeHeaderLogoLink>
      </StyledHomeHeaderLogoWrapper>
      <ThemeSwitcher />
    </StyledHomeHeaderWrapper>
  );
};
