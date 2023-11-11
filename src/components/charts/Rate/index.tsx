import { Gauge } from '@ant-design/plots';

export const RateChart = ({ data }) => {
  const countPerc = () => {
    let done = 0;
    let all = 0;
    data.forEach((user) => {
      const arr = user.progress.split(' из ');
      done += arr[0];
      all += arr[1];
    });

    return done / all;
  };

  const percentage = countPerc();

  const config = {
    percent: percentage,
    range: {
      color: 'l(0) 0:#B8E1FF 1:#3D76DD',
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#fff',
        },
        formatter: () => `${Math.ceil(percentage * 100)}%`,
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#fff',
        },
        formatter: () => 'Общий прогресс',
      },
    },
  };

  return <Gauge {...config} />;
};
