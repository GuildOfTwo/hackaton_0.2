import { Card } from 'antd';
import styled from 'styled-components';

export const CourseCard = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundColor1};
`;
export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.backgroundColor1};
`;
export const CourseCardText = styled.div`
  color: black;
  font-family: 'TildaSans';
  font-weight: 500;
`;

export const DashContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const BorderColors = styled.div`
  border: 10px double green;
  margin-right: 40px;
`;

export const CourseTitle = styled.p`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 600;
`;

export const CourseCardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 23px 0;
`;

export const CorseCardDoneDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.buttonColor1};
  border-radius: 5px;
  gap: 10px;
  padding: 8px;
`;

export const AddCourseDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor4};
  border: 1px solid grey;
  border-radius: 5px;
  padding: 8px;
  color: ${(props) => props.theme.textcolor};
`;

export const CategoryContainer = styled.div`
  border-bottom: 1px dotted grey;
  padding: 0 0 40px 0;
`;
