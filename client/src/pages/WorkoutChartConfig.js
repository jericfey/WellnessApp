// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Workout Summary", //Set the chart caption
      subCaption: "Length in Miles", //Set the chart subcaption
      xAxisName: "Fitness Type", //Set the x-axis name
      yAxisName: "Miles", //Set the y-axis name
      numberSuffix: "Mi",
      theme: "fusion", //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData,
  },
};
