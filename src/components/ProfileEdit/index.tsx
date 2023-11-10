import {
  ItemWrapper,
  PWrapper,
  ProfileEditWrapper,
  StyledForm,
  Label,
  StyledInput,
  ErrorMessage,
} from './styled';
import { useState } from 'react';
import { Button, DatePicker, Form, Space } from 'antd';
import { useAppSelector } from '../../hooks';
import { FormOutlined } from '@ant-design/icons';
import { profileEditPatch } from '../../api/ProfileEditPatch';
import dayjs from 'dayjs';
import { errorHandler } from '../../utils/errorHandler';
import { phoneNumberRegExp, telegramLogin } from '../../utils/constants/forms';
import { TProfileFieldType } from '../../utils/types/types';

const ProfileEdit = () => {
  const [isDisabledTelegram, setNoNDisabledTelegram] = useState(true);
  const [isDisabledPhone, setNoNDisabledPhone] = useState(true);
  const [error, setError] = useState();
  const userInfo = useAppSelector((store) => store.user.user);
  const handleSumbit = (fieldsValue: TProfileFieldType) => {
    console.log(userInfo?.birthday);
    const DateOfBirth = new Date(dayjs(fieldsValue.DateOfBirth).format('YYYY/MM/DD'));
    setNoNDisabledTelegram(true);
    setNoNDisabledPhone(true);
    // setNoNDisabledBirthday(true);
    userInfo &&
      profileEditPatch(fieldsValue.telegram, fieldsValue.Phone, DateOfBirth, userInfo.id)
        .then((res) => console.log(res))
        .catch((error) => setError(error.response.status));
  };
  if (userInfo)
    return (
      <ProfileEditWrapper>
        <h2>Ваш профиль</h2>
        <PWrapper>
          {userInfo.firstName && (
            <>
              <p>Имя:</p>
              <p>{userInfo.firstName}</p>
            </>
          )}
          {userInfo.lastName && (
            <>
              {' '}
              <p>Фамилия:</p>
              <p>{userInfo.lastName}</p>
            </>
          )}
          {userInfo.middleName && (
            <>
              {' '}
              <p>Фамилия:</p>
              <p>{userInfo.middleName}</p>
            </>
          )}
          {userInfo.post && (
            <>
              {' '}
              <p>Фамилия:</p>
              <p>{userInfo.post}</p>
            </>
          )}
          {userInfo.departament && (
            <>
              {' '}
              <p>Отдел:</p>
              <p>{userInfo.departament}</p>
            </>
          )}
          {userInfo.director && (
            <>
              {' '}
              <p>Руководитель:</p>
              <p>{userInfo.director}</p>
            </>
          )}
          {userInfo.mentor && (
            <>
              {' '}
              <p>Ментор:</p>
              <p>{userInfo.mentor}</p>
            </>
          )}
          {userInfo.mentor_tg && (
            <>
              {' '}
              <p>Телеграм ментора:</p>
              <p>{userInfo.mentor_tg}</p>
            </>
          )}
          {userInfo.phoneNumber && (
            <>
              {' '}
              <p>Номер телефона:</p>
              <p>{userInfo.phoneNumber}</p>
            </>
          )}
          {userInfo.firstName && (
            <>
              {' '}
              <p>Телеграм:</p>
              <p>{userInfo.telegram}</p>
            </>
          )}
        </PWrapper>
        <StyledForm
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          autoComplete='off'
          onFinish={handleSumbit}
          initialValues={{
            Telegram: `${userInfo.telegram && userInfo.telegram}`,
            phone: `${userInfo.phoneNumber && userInfo.phoneNumber}`,
            DateOfBirth: `${userInfo.birthday && dayjs(`${userInfo?.birthday}`, 'YYYY-MM-DD')}`,
          }}
        >
          <ItemWrapper>
            <Form.Item<TProfileFieldType>
              label={<Label>Telegram</Label>}
              name='telegram'
              rules={[
                {
                  required: true,
                  pattern: telegramLogin,
                  message: 'Введите телеграм логин в формате @Telegram',
                },
              ]}
            >
              <Space.Compact style={{ width: '100%' }}>
                <StyledInput disabled={isDisabledTelegram} />
                <Button onClick={() => setNoNDisabledTelegram(!isDisabledTelegram)} type='primary'>
                  <FormOutlined />
                </Button>
              </Space.Compact>
            </Form.Item>
          </ItemWrapper>

          <ItemWrapper>
            <Form.Item<TProfileFieldType>
              label={<Label>Телефон</Label>}
              name='Phone'
              rules={[
                {
                  required: true,
                  pattern: phoneNumberRegExp,
                  message: 'Введите номер в корректном формате',
                },
              ]}
            >
              <Space.Compact style={{ width: '100%' }}>
                <StyledInput disabled={isDisabledPhone} />
                <Button onClick={() => setNoNDisabledPhone(!isDisabledPhone)} type='primary'>
                  <FormOutlined />
                </Button>
              </Space.Compact>
            </Form.Item>
          </ItemWrapper>

          <ItemWrapper>
            <Form.Item name='DateOfBirth' label={<Label>Дата рождения</Label>}>
              <DatePicker disabled={false} />
            </Form.Item>
          </ItemWrapper>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Подтвердить
            </Button>
          </Form.Item>
        </StyledForm>
        {error ? <ErrorMessage>{errorHandler(error)}</ErrorMessage> : null}
      </ProfileEditWrapper>
    );
};

export default ProfileEdit;
