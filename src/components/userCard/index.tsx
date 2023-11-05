import { FC } from 'react';
import { InfoSubtitle, InfoTitle, InfoWrap, Wrapper } from './styled';
import { Button, Switch } from 'antd';

export const UserCard: FC = () => {
    const onChange = (checked:any) => {
        console.log(`switch to ${checked}`);
      };
  return <Wrapper>

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

<Button style={{width: '90%'}}>Изменение профиля</Button>
<div >
<Switch defaultChecked onChange={onChange} style={{width: '40%'}}/>
<div>выберите тему</div>
</div>
  </Wrapper>;
};
