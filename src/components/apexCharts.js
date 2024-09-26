"use client";

import dynamic from "next/dynamic";

const ReactApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function RadarCharts(props) {
  return (
    <ReactApexCharts
      options={props.options}
      series={props.series}
      type="radar"
    />
  );
}
