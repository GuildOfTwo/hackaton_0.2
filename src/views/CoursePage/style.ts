import styled from 'styled-components';

export const CourseContainer = styled.section`
  gap: 20px;
  margin: 0 auto;
  max-width: 900px;
`;

export const CourseTitle = styled.p`
  font-family: 'TildaSans';
  font-size: large;
  margin-bottom: 40px;
`;

export const CourseText = styled.p`
  font-family: 'TildaSans';
`;

export const CourseQuestionDiv = styled.div`
  min-height: 40px;
  width: 100%;
  margin-top: 50px;
`;

export const Label = styled.div`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 500;
`;
