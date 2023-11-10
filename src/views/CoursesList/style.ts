import styled from 'styled-components';

export const CourseCard = styled.div`
width: 300px;
height: 300px;
overflow: hidden;
`;

export const CourseCardText = styled.div`
  color: black;
  font-family: 'TildaSans';
  font-weight: 500;
`;

export const DashContainer = styled.section`
display: grid;
grid-template-columns: repeat(3, 300px);
gap: 20px;
margin: 0 auto;
`;

export const BorderColors = styled.div`
border: 10px double green;
margin-right: 40px;
`;

export const CourseTitle = styled.p`
  /* color: ${(props) => props.theme.textcolor}; */
  color: black;
  font-family: 'TildaSans';
  font-weight: 600;
  `;

export const CourseCardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;

export const CorseCardDoneDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  margin-right: 20px;
  border-radius: 10%;
  padding: 8px;
  `;
