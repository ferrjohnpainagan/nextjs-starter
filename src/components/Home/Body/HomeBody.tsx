import Image from 'next/image';
import {
  StyledCardSpan,
  StyledCardTitle,
  StyledCardWrapper,
  StyledHomeBodyCardsWrapper,
  StyledHomeBodyImageWrapper,
} from './HomeBodyStyle';
import { IHomeBodyType } from './HomeBodyType';

export const HomeBody = (props: IHomeBodyType) => {
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
            docs <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="/SSG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            SSG <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="/SSR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            SSR <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="/ISR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            ISR <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
        </StyledCardWrapper>
      </StyledHomeBodyCardsWrapper>
    </>
  );
};
