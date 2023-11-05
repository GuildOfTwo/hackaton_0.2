import styled from 'styled-components';
import { Card } from 'antd';

export const CoursesList = () => {
  const DashContainer = styled.section`
    display: flex;
  `;

  const BorderColors = styled.div`
    border: 10px double green;
    margin-right: 40px;
  `;

  return (
    <>
      <DashContainer>
        <BorderColors>
          <Card title='Card title' bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </BorderColors>
        <Card title='Card title' bordered={true} style={{ width: 300, marginRight: 40 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title='Card title' bordered={true} style={{ width: 300, marginRight: 40 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </DashContainer>
    </>
  );
};
