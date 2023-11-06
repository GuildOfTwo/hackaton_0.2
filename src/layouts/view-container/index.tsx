import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper } from './styled';

export const ViewContainer: FC = () => {
  return (
    <ContentWrapper>
      <Outlet />
    </ContentWrapper>
  );
};
