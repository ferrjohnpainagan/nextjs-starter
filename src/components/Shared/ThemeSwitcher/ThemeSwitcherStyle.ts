import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledThemeSwitcherWrapper = styled.div`
  ${tw` flex items-center gap-2`}
`;

export const StyledThemeSwitcherToggleWrapper = styled.div`
  ${tw`w-[50px] h-[20px] dark:bg-white bg-gray-1 relative rounded-2xl cursor-pointer`}
`;

export const StyledThemeSwitcherButton = styled.div<{ isLight: boolean }>`
  ${tw`w-[17px] h-[17px] absolute top-[50%] translate-y-[-50%] transition-all duration-200  rounded-full dark:bg-gray-1 bg-white z-0`}
  ${({ isLight }) => (isLight ? tw`translate-x-7` : tw`left-1`)}
`;
