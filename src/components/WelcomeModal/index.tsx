import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input } from 'antd';
import { phoneNumberRegExp, telegramLogin } from '../../utils/constants/forms';
import { ButtonWrapper, FormWrapper, Label, ResetButton } from './styled';

const WelcomeModal = () => {
  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);

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

    return (
      <Button type='primary' htmlType='submit' disabled={!submittable}>
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
        name='Telegram'
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
        name='Телефон'
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
    </FormWrapper>
  );
};

export default WelcomeModal;
