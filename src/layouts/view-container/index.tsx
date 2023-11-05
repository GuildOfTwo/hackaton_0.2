import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper } from './styled';
import TelegramLink from '../../components/telegram_link';

export const ViewContainer: FC = () => {
    return (
        <ContentWrapper>
            <TelegramLink />
            <Outlet />
        </ContentWrapper>
    );
};
