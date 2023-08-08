import React from 'react';
import { Chart } from 'react-chartjs-2';

const DotPlot = ({ data }) => {
  const chartData = {
    datasets: [
      {
        data: data.map((value, index) => ({ x: value, y: index + 1 })),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHitRadius: 10,
        pointStyle: 'circle',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        grid: {
          display: false,
        },
      },
      x: {
        type: 'linear',
        position: 'bottom',
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Chart type="scatter" data={chartData} options={options} />
    </div>
  );
};

export default DotPlot;