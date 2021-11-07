
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { Salesum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    series: number[];
    labels: string[];
}


const DonutChart = () => {
    
    const [chartData, setChartData] = useState<ChartData>( {series: [], labels: []})

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-saller`)
        .then(response => {
            const data = response.data as Salesum[];
            const mySeries = data.map(x => x.sum);
            const myLabels = data.map(x => x.sallerName);

            setChartData({ series: mySeries, labels: myLabels});
        });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    
    return (
        <Chart 
            options={{ ...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
  }
  
  export default DonutChart;
  