import { Pie } from '@ant-design/plots';

export const PieChart = ({ users }) => {
  const createData = () => {
    const dic = {};
    const resArr = [];
    users.forEach((user) => {
      if (!(user.department in dic)) {
        dic[user.department] = 1;
      } else {
        dic[user.department] += 1;
      }
    });

    for (const key in dic) {
      if (key !== 'null')
        resArr.push({
          type: key,
          value: dic[key],
        });
    }

    return resArr;
  };

  const data = createData();

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(2)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};
