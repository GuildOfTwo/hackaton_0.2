import styled from 'styled-components';
import { Button, Form, DatePicker } from 'antd';
import Input from 'antd/es/input/Input';
import FormItem from 'antd/es/form/FormItem';
import { FormOutlined } from '@ant-design/icons';

export const ProfileEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-family: 'TildaSans';
  font-weight: 700;
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
export const ButtonText = styled.span`
  color: white;
`;
export const StyledIcon = styled(FormOutlined)`
  color: white;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 600;
  margin-right: 10px;
`;

export const TrophyImg = styled.img`
  max-width: 75px;
  max-height: 75px;
`;

export const TrophyGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px 15px;
  justify-content: center;
  align-items: center;
`;

export const TrophyGridTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const TrophyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TrophyTitle = styled.p`
  margin-top: 10px;
  text-align: center;
`;
