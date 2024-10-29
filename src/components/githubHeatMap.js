"use client";

// Used react-heat-map instead of react-github-calendar because of safari error (iphone 12 pro)
// Tooltip module change : https://github.com/uiwjs/react-heat-map/issues/129#issuecomment-1751591981
import HeatMap from "@uiw/react-heat-map";
import { Tooltip } from "react-tooltip";

export default function GithubHeatMap({ githubData }) {
  return (
    <div className="grid grid-cols-1 mx-auto overflow-x-auto overflow-y-hidden">
      <HeatMap
        width={720}
        style={{ color: "#94a3b8", fontSize: "12px" }}
        startDate={new Date(githubData["contributions"][0].date)}
        endDate={
          new Date(
            githubData["contributions"][
              githubData["contributions"].length - 1
            ].date,
          )
        }
        panelColors={{
          1: "#253044",
          4: "#C6E48B",
          8: "#7BC96F",
          12: "#239A3B",
          32: "#196127",
        }}
        value={githubData["contributions"].map((item) => ({
          date: item.date.replaceAll("-", "/"),
          count: item.count,
        }))}
        rectRender={(props, data) => {
          return (
            <rect
              {...props}
              data-tooltip-id="heatMapTooltip"
              data-tooltip-content={`${data.date} : ${data.count || 0} commits`}
            />
          );
        }}
      />
      <Tooltip id="heatMapTooltip" />
    </div>
  );
}
