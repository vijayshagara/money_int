import React, { useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const [chartOptions] = useState({
    series: [44, 55, 41, 17, 15],
    legend: {
      show: false,
    },
    chart: {
      width: 380,
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div className="don_chart">
      <div className="chart_div">
        <h3>Customers</h3>
        <p style={{color:"GrayText"}}>Customers that buy products</p>
      </div>
      <div id="chart">
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="donut"
          height={300}
          width={400}
        />
      </div>
    </div>
  );
};

export default DonutChart;
