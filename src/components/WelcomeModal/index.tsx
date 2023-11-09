import React, { useState }from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input } from 'antd';
import { phoneNumberRegExp, telegramLogin } from '../../utils/constants/forms';
import { ButtonWrapper, ErrorMessage, FormWrapper, Label, ResetButton } from './styled';
import { firstSignInPatch } from '../../api/firstSignInPatch';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFirstSignInFalse } from '../../store/user';
import { errorHandler } from '../../utils/errorHandler';

const WelcomeModal = () => {
  const [error, setError] = useState();
  console.log(error);
  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);
    const userID = useAppSelector(store => store.user.user?.id);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
    }, [values]);

    const handleSumbit = () => {
      userID && firstSignInPatch(userID, values.phoneNumber, values.TelegramID).then(() => (dispatch(setFirstSignInFalse())))
      .catch((error) => setError(error.response.status));
    }

    return (
      <Button type='primary' htmlType='submit' disabled={!submittable} onClick={handleSumbit}>
        Подтвердить
      </Button>
    );
  };

  const [form] = Form.useForm();

  return (
    <FormWrapper
      form={form}
      name='validateOnly'
      layout='vertical'
      autoComplete='off'
      onClick={(e) => e.stopPropagation()}
    >
      <Form.Item
        name='TelegramID'
        label={<Label>Укажите ваш @Telegram</Label>}
        rules={[
          {
            required: true,
            pattern: telegramLogin,
            message: 'Введите телеграм логин в формате @Telegram',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='phoneNumber'
        label={<Label>Укажите ваш телефонный номер</Label>}
        rules={[
          {
            required: true,
            pattern: phoneNumberRegExp,
            message: 'Введите номер в корректном формате',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <ButtonWrapper>
          <SubmitButton form={form} />
          <ResetButton htmlType='reset'>Сбросить</ResetButton>
        </ButtonWrapper>
      </Form.Item>
      {error ? <ErrorMessage>{errorHandler(error)}</ErrorMessage> : null}
    </FormWrapper>
  );
};

export default WelcomeModal;
