import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'



type TChartData = {
  chartData: {labels: string[];
    datasets: {
        label: string;
        data: number[];
    }[];}
}

export const BarChart = ({chartData} : TChartData) => {

  return <Bar data={chartData}/>
    
 
}

