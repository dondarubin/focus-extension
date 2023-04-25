import React from "react";
import { Bar } from "react-chartjs-2";
import type { ChartData, ChartDataset } from "chart.js";
import { CategoryScale, LinearScale, BarController, BarElement, Chart } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);
Chart.defaults.font.size = 14;
Chart.defaults.font.family = "Work Sans";
Chart.defaults.font.weight = "bold";
Chart.defaults.borderColor = "#000000";

interface Props {
    data: number[];
}

interface BarChartData extends ChartData {
    datasets: ChartDataset<"bar">[];
}

export const BarChart: React.FC<Props> = ({ data }) => {
    const chartData: BarChartData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Hours",
                data: data,
                backgroundColor: "#9ACD32",
                borderColor: "#040404",
                borderWidth: 1,
                borderRadius: {
                    topLeft: 5,
                    topRight: 5,
                    bottomLeft: 0,
                    bottomRight: 0
                },
                barPercentage: 0.5,
                categoryPercentage: 1,
                borderSkipped: false
            }
        ]
    };

    const chartOptions = {
        responsive: false,
        maintainAspectRatio: true,
        tooltips: {enabled: false},
        hover: {mode: null},
        scales: {
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: function(value, index, values) {
                        if (value % 2 == 0) {
                            return value + "h";
                        }
                    },
                    beginAtZero: true,
                    color: "black"
                },
                suggestedMax: 8
            },
            x: {
                gridLines: {
                    color: "#040404",
                    lineWidth: 4
                },
                grid: {
                    display: false
                },
                categoryPercentage: 1,
                ticks: {
                    color: "black"
                }
            }
        }
    };

    return (
        <Bar
            data={chartData}
            options={chartOptions}
            width={398}
            height={206}
        />
    );
};
