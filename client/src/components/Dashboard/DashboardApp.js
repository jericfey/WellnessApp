// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

//Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    label: "Run",
    value: "5.0",
  },
  {
    label: "Hike",
    value: "10.0",
  },
  {
    label: "Stationary Bike",
    value: "10.0",
  },
  {
    label: "Outdoor Bike",
    value: "13.0",
  },
  {
    label: "Swim",
    value: "5.0",
  },
  {
    label: "Mountain Hike",
    value: "13.0",
  },
  {
    label: "Ski",
    value: "10.0",
  },
  {
    label: "Walk",
    value: "12.0",
  },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Workout Type",
      //Set the chart subcaption
      subCaption: "In Mi = One Mile",
      //Set the x-axis name
      xAxisName: "Fitness Type",
      //Set the y-axis name
      yAxisName: "Distance (Miles)",
      numberSuffix: "Mi",
      //Set the theme for your chart
      theme: "fusion",
    },
    // Chart Data
    data: chartData,
  },
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}

// export default App;

export default App;
