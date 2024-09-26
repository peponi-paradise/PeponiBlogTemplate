"use client";

import dynamic from "next/dynamic";

const ReactApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const barOptions = {
  width: "100%",
  series: [
    {
      name: "group1",
      data: [44, 55, 41, 64, 22, 43, 21],
    },
    {
      name: "group2",
      data: [53, 32, 33, 52, 13, 44, 100],
    },
  ],
  options: {
    colors: ["#008080 ", "#008000 "],
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
  },
};

export default function ApexCharts(props) {
  return (
    <ReactApexCharts options={barOptions.options} series={barOptions.series} />
  );
}
