import React from 'react';
import ReactApexChart from 'react-apexcharts';

function BarGraph({ data }) {
  const chartOptions = {
    chart: {
      id: 'bar-graph',
    },
    xaxis: {
      categories: data.map((item) => item.date),
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    yaxis: {
      title: {
        text: 'Value',
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const chartSeries = [
    {
      name: 'Value',
      data: data.map((item) => item.value),
    },
  ];

  return (
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height='100%'
        width='100%'
      />
  );
}

export default BarGraph;