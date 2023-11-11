import styled from 'styled-components';
import { Button, Form, DatePicker } from 'antd';
import Input from 'antd/es/input/Input';
import FormItem from 'antd/es/form/FormItem';

export const ProfileEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  font-size: 17px;
  font-weight: 500;
`;
export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 15px 15px;
`;
export const PWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 20px 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: yellow;
`;

export const StyledInput = styled(Input)`
  background-color: ${(props) => props.theme.background};
  &:disabled {
    background-color: ${(props) => props.theme.backgroundColor2};
  }
  color: ${(props) => props.theme.textcolor2};
  &:disabled {
    color: ${(props) => props.theme.textcolor2};
  }
`;

export const StyledDatePicker = styled(DatePicker)``;

export const EditButton = styled(Button)`
  max-width: max-content;
  align-self: center;
  justify-self: center;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledFormItem = styled(FormItem)``;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-weight: 900;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 600;
  margin-right: 10px;
`;
