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
  const { translate } = useBaseComponent({
    chain: 'common',
  });

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
            {translate('home.docs')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.docs-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            {translate('home.learn')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.learn-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            {translate('home.translate')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.translate-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>

        <StyledCardWrapper
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledCardTitle>
            {translate('home.deploy')} <StyledCardSpan>-&gt;</StyledCardSpan>
          </StyledCardTitle>
          <StyledCardParagraph>
            {translate('home.deploy-description')}
          </StyledCardParagraph>
        </StyledCardWrapper>
      </StyledHomeBodyCardsWrapper>
    </>
  );
};
