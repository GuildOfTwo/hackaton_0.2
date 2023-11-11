import { RateChart } from '../../components/charts/Rate';
import { PieChart } from '../../components/charts/Pie';
import { HistogramChart } from '../../components/charts/Histogram';
import { ChartCardStyled } from '../../layouts/ChartCard';
import { Table } from '../../components/charts/Table';
import styled from 'styled-components';
import { TUserForDash } from '../../utils/types/types';
import { getAllUsers } from '../../api/getAllUsers';
import { useState, useEffect } from 'react';
import { formatUsersData } from '../../lib/formatUsersData';

const SectionStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
`;

const ChartsSpace = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const AllUserCharts = () => {
  const [users, setUsers] = useState<TUserForDash[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        const newUsers = formatUsersData(res.data);
        setUsers(newUsers);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SectionStyled>
      {isLoaded ? (
        <>
          <ChartsSpace>
            <div>
              <h2>Общий прогресс</h2>
              <ChartCardStyled>
                <RateChart data={users} />
              </ChartCardStyled>
            </div>

            <div>
              <h2>Завершенные курсы по дням</h2>
              <ChartCardStyled>
                <HistogramChart users={users} />
              </ChartCardStyled>
            </div>

            <div>
              <h2>Распределение по отделам</h2>
              <ChartCardStyled>
                <PieChart users={users} />
              </ChartCardStyled>
            </div>
          </ChartsSpace>
          <Table users={users} />
        </>
      ) : null}
    </SectionStyled>
  );
};
