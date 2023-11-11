import { Column } from '@ant-design/plots';

export const HistogramChart = ({ users }) => {
  const createDataConfig = () => {
    const res = [];
    users.forEach((user) => res.push(user.UserCourses));
    const dic = {};
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
  return <Column {...config} />;
};
