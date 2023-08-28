import { useBaseComponent } from '@hooks/base/useBaseComponent';
import { StyledHomeLayout } from './HomeLayoutStyle';
import { IHomeLayoutProps } from './HomeLayoutType';

export const HomeLayout = (props: IHomeLayoutProps) => {
  useBaseComponent();
  const { children } = props;
  return <StyledHomeLayout>{children}</StyledHomeLayout>;
};
