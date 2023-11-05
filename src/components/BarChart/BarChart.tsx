import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);



export type TChartData = {
  chartData: {labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];}
}

export const BarChart = ({chartData} : TChartData) => {

  return <Bar data={chartData}/>
    
 
}

