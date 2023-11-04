import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { MAIN_PAGE_URI } from '../../utils/constants/navigation';
import { ErorrTitle, Title, Wrapper404, ButtonWrapper, LetterSpacingZero } from './styled';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  function goToMainPage() {
    navigate(MAIN_PAGE_URI, { replace: true });
  }

  function goBack() {
    navigate(-1)
  };

  return (
    <Wrapper404>
      <ErorrTitle>40<LetterSpacingZero>4</LetterSpacingZero></ErorrTitle>
      <Title>Ошибка. Страница не найдена.</Title>
      <Title>Попробуйте презагрузить страницу</Title>
      <ButtonWrapper>
        <Button onClick={() => goToMainPage()}>На главную</Button>
        <Button onClick={() => goBack()}>Назад</Button>
      </ButtonWrapper>
    </Wrapper404>
  );
};
