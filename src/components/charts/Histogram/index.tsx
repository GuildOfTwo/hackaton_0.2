import { Column } from '@ant-design/plots';

import { TUserForDash } from '../../../utils/types/types';

interface IProps {
  users: TUserForDash[]
}

interface IDic {
  [key: string]: number;
}

export const HistogramChart: React.FC<IProps> = ({ users }) => {
  const createDataConfig = () => {
    // @ts-ignore: error message
    const res = [];
    users.forEach((user) => res.push(user.UserCourses));
    const dic: IDic = {};
    // @ts-ignore: error message
    res.flat().forEach((el) => {
      const key = new Date(el.doneDate).getDate();
      if (!(key in dic)) {
        dic[key] = 1;
      } else {
        dic[key] += 1;
      }
    });

    const final = [];

    for (const key in dic) {
      final.push({
        name: 'Пройдено курсов',
        月份: key,
        月均降雨量: dic[key],
      });
    }

    return final;
  };

  const data = createDataConfig();

  const config = {
    data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',

    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  // @ts-ignore: error message
  return <Column {...config} />;
};
