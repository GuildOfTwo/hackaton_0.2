/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { dataFirst } from './data';
import { BarChart } from '../../components/BarChart/BarChart';
import styled from 'styled-components';

const ChartDiv = styled.div`
  display: flex;
  height: 800px;
  width: 800px;
`;

export const AllUserStats: FC = () => {
  const [basicCourseTime] = useState({
    labels: dataFirst.map((el) => el.departament),
    datasets: [
      {
        label: 'Среднее время прохождения базового курса',
        data: dataFirst.map((el) => el.time),
      },
    ],
  });

  return (
    <>
      <ChartDiv>
        <BarChart chartData={basicCourseTime} />
      </ChartDiv>
    </>
  );
};
