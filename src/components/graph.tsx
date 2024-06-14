"use client";
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { PlantMetrics } from "@/api/data";

Chart.register(...registerables);

const Graph: React.FC<{
  xValues: string[];
  yValues: number[];
  greeanHoseNo: number;
}> = ({ xValues, yValues, greeanHoseNo }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current;

    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const minValue =
      PlantMetrics.Predicted_Min_Avg_Production_from_Plant_Per_Day[
        greeanHoseNo
      ];
    const maxValue =
      PlantMetrics.Predicted_Max_Avg_Production_from_Plant_Per_Day[
        greeanHoseNo
      ];
    const avgValue =
      PlantMetrics.Predicted_Avg_Production_Per_Plant[greeanHoseNo]; //yValues.reduce((a, b) => a + b, 0) / yValues.length;

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Data",
            data: yValues,
            borderColor: "blue",
            fill: false,
          },
          {
            label: "Min",
            data: new Array(xValues.length).fill(minValue),
            borderColor: "red",
            borderDash: [5, 5],
            fill: false,
          },
          {
            label: "Average",
            data: new Array(xValues.length).fill(avgValue),
            borderColor: "orange",
            borderDash: [5, 5],
            fill: false,
          },
          {
            label: "Max",
            data: new Array(xValues.length).fill(maxValue),
            borderColor: "green",
            borderDash: [5, 5],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "category",
            position: "bottom",
            title: {
              display: true,
              text: "Date",
              font: {
                size: 16, // Increase font size for x-axis label
              },
            },
          },
          y: {
            type: "linear",
            title: {
              display: true,
              text: "Total Harvest(kg)",
              font: {
                size: 16, // Increase font size for y-axis label
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [xValues, yValues]);

  return (
    <div className="">
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
};

export default Graph;
