import { useBaseComponent } from '@base/BaseComponent';
import Image from 'next/image';
import {
  StyledCardParagraph,
  StyledCardSpan,
  StyledCardTitle,
  StyledCardWrapper,
  StyledHomeBodyCardsWrapper,
  StyledHomeBodyImageWrapper,
} from './HomeBodyStyle';

export const HomeBody = () => {
  useBaseComponent();

  return (
    <>
      <StyledHomeBodyImageWrapper>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </StyledHomeBodyImageWrapper>
      <StyledHomeBodyCardsWrapper>
        <StyledCardWrapper
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            Docs <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            Find in-depth information about Next.js features and API.
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            Learn <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            Templates <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            Deploy <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </StyledCardParagraph>
        </StyledCardWrapper>
      </StyledHomeBodyCardsWrapper>
    </>
  );
};
