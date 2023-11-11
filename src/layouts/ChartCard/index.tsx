import { ChartCard } from './styled';

interface IProps {
  children: any;
}

export const ChartCardStyled: React.FC<IProps> = ({ children }) => {
  return <ChartCard>{children}</ChartCard>;
};
