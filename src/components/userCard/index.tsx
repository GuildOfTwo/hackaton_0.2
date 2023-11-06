import { FC, useState } from 'react';
import { InfoSubtitle, InfoTitle, InfoWrap, ProfileButton, SwitchButton, Wrapper } from './styled';
import { useAppDispatch } from '../../hooks';
import { setDarkTheme, setDefaultTheme } from '../../store/theme';

export const UserCard: FC = () => {
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem('app-theme') !== 'dark' ? true : false
  );
  const dispatch = useAppDispatch();
  const handleSwitch = (checked: boolean) => {
    setChecked(!checked);
    checked ? dispatch(setDarkTheme()) : dispatch(setDefaultTheme());
  };
  return (
    <Wrapper>
      <InfoWrap>
        <InfoTitle>Отдел</InfoTitle>
        <InfoSubtitle>Реклама</InfoSubtitle>
      </InfoWrap>

      <InfoWrap>
        <InfoTitle>Руководитель</InfoTitle>
        <InfoSubtitle>Иванов Иван</InfoSubtitle>
      </InfoWrap>

      <InfoWrap>
        <InfoTitle>Ментор</InfoTitle>
        <InfoSubtitle>Иванов Иван</InfoSubtitle>
      </InfoWrap>

      <InfoWrap>
        <InfoTitle>Мой email</InfoTitle>
        <InfoSubtitle>Leonov.DYu@proscom.ru</InfoSubtitle>
      </InfoWrap>

      <InfoWrap>
        <InfoTitle>Мой телефон</InfoTitle>
        <InfoSubtitle>8 3254 52352345</InfoSubtitle>
      </InfoWrap>

      <ProfileButton style={{ width: '90%' }}>Изменение профиля</ProfileButton>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <SwitchButton
          onChange={() => handleSwitch(checked)}
          style={{ width: '40%' }}
          checked={checked}
        />
        <div>выберите тему</div>
      </div>
    </Wrapper>
  );
};
