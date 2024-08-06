import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const StatisticsChart = () => {
    // Define all days (x-axis categories)
    const days = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

    // Define bar values for each day (e.g., daily earnings)
    const barData = days.reduce((acc, day) => {
        // Example: random daily earnings between 1000 and 3000
        acc[day] = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
        return acc;
    }, {});

    // Create data series with values at specified days
    const seriesData = days.map(day => ({
        value: barData[day],
        name: day
    }));

    const option = {
        color: ['#3A84FF'],
        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow" // Bar chart tooltip type
            },
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderWidth: 0,
            textStyle: {
                color: "#fff"
            }
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false,
        },
        xAxis: [
            {
                type: "category", // Use category type for x-axis
                data: days, // All days
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.7)',
                    formatter: (value) => {
                        // Only show labels for every 5th day
                        return parseInt(value) % 5 === 0 ? value : '';
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            }
        ],
        series: [
            {
                type: "bar",
                barWidth: '50%', // Adjust width as needed
                barGap: '10%',
                itemStyle: {
                    borderRadius: [5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "#3A84FF",
                        },
                        {
                            offset: 1,
                            color: "#3A84FF"
                        }
                    ]),
                },
                emphasis: {
                    focus: "series",
                },
                data: seriesData
            }
        ]
    };

    return (
        <ReactECharts option={option} style={{ height: '260px', width: '100%' }} />
    );
}

export default StatisticsChart;
