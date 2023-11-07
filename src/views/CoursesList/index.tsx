import styled from 'styled-components';
import { Card } from 'antd';
import Markdown from 'react-markdown';
import { MARKDOWN_TEMPLATE } from '../../utils/markdown/markdown';
export const CoursesList = () => {
  const DashContainer = styled.section`
    display: flex;
    margin: 0 auto;
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
            <Markdown>{MARKDOWN_TEMPLATE}</Markdown>
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
