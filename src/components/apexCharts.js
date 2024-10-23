"use client";

import dynamic from "next/dynamic";

const ReactApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function RadarCharts({ series, options }) {
  return <ReactApexCharts options={options} series={series} type="radar" />;
}
