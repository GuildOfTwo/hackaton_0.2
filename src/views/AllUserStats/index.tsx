/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { dataFirst } from './data';
import { BarChart } from '../../components/BarChart/BarChart';
import styled from 'styled-components';
import { Table } from '../../components/charts/Table';

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
    <div style={{ margin: '0 auto' }}>
      <ChartDiv style={{ margin: '0 auto' }}>
        <BarChart chartData={basicCourseTime} />
      </ChartDiv>
    </div>
  );
};

export const AllUserStats2: FC = () => {


  return (
    <div style={{ margin: '0 auto' }}>
      <Table />
    </div>
  );
};
