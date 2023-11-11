import {
  ItemWrapper,
  PWrapper,
  ProfileEditWrapper,
  StyledForm,
  Label,
  StyledInput,
  ErrorMessage,
  StyledDatePicker,
  StyledFormItem,
  EditButton,
  ButtonText,
  StyledIcon,
} from './styled';
import { useState } from 'react';
import { Button, Form, Space, ConfigProvider } from 'antd';
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
  const DateOfBirth = new Date(dayjs(userInfo?.birthday).format('YYYY/MM/DD'));
  const theme = useAppSelector((store) => store.theme.theme);
  const handleSumbit = (fieldsValue: TProfileFieldType) => {
    const DateOfBirth = new Date(dayjs(fieldsValue.DateOfBirth).format('YYYY/MM/DD'));
    setNoNDisabledTelegram(true);
    setNoNDisabledPhone(true);
    userInfo &&
      profileEditPatch(fieldsValue.telegram, fieldsValue.Phone, DateOfBirth, userInfo.id).catch(
        (error) => setError(error.response.status)
      );
  };
  if (userInfo)
    return (
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              colorBgElevated: theme === 'default' ? 'white' : `#0A1F32`,
            },
            Button: {
              defaultColor: `#ff0000`,
              defaultBg: `#ff0000`,
              colorBgTextActive: `#ff0000`,
              primaryColor: `#ff0000`,
              colorText: `#ff0000`,
            },
          },
        }}
      >
        <ProfileEditWrapper>
          <h2>Ваш профиль</h2>
          <PWrapper>
            <>
              <p>Имя:</p>
              <p>{userInfo.firstName ? userInfo.firstName : 'не заполнено'}</p>
            </>
            <>
              <p>Фамилия:</p>
              <p>{userInfo.lastName ? userInfo.lastName : 'не заполнено'}</p>
            </>
            <>
              <p>Отчество:</p>
              <p>{userInfo.middleName ? userInfo.middleName : 'не заполнено'}</p>
            </>

            <>
              <p>Должность:</p>
              <p>{userInfo.post ? userInfo.post : 'не заполнено'}</p>
            </>
            <>
              <p>Отдел:</p>
              <p>{userInfo.department ? userInfo.department : 'не заполнено'}</p>
            </>
            <>
              <p>Ментор:</p>
              <p>{userInfo.mentor ? userInfo.mentor : 'не назначен'}</p>
            </>
            <>
              <p>Телеграм ментора:</p>
              <p>{userInfo.mentor_tg ? userInfo.mentor_tg : 'не заполнено'}</p>
            </>
            <>
              <p>Номер телефона:</p>
              <p>{userInfo.phoneNumber ? userInfo.phoneNumber : 'не заполнено'}</p>
            </>
          </PWrapper>
          <StyledForm
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            autoComplete='off'
            onFinish={handleSumbit}
            initialValues={{ DateOfBirth: DateOfBirth && dayjs(DateOfBirth) }}
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
                  <StyledInput
                    defaultValue={userInfo?.telegram ? userInfo.telegram : '@telegram'}
                    disabled={isDisabledTelegram}
                  />
                  <Button
                    onClick={() => setNoNDisabledTelegram(!isDisabledTelegram)}
                    type='primary'
                  >
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
                  <StyledInput
                    defaultValue={userInfo?.phoneNumber ? userInfo.phoneNumber : '@telegram'}
                    disabled={isDisabledPhone}
                  />
                  <Button onClick={() => setNoNDisabledPhone(!isDisabledPhone)} type='primary'>
                    <StyledIcon />
                  </Button>
                </Space.Compact>
              </Form.Item>
            </ItemWrapper>

            <ItemWrapper>
              <StyledFormItem name='DateOfBirth' label={<Label>Дата рождения</Label>}>
                <StyledDatePicker disabled={false} />
              </StyledFormItem>
            </ItemWrapper>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <EditButton type='primary' htmlType='submit'>
                <ButtonText> Подтвердить</ButtonText>
              </EditButton>
            </Form.Item>
          </StyledForm>
          {error ? <ErrorMessage>{errorHandler(error)}</ErrorMessage> : null}
        </ProfileEditWrapper>
      </ConfigProvider>
    );
};

export default ProfileEdit;
