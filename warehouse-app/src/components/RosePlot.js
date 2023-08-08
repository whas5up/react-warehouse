import React from 'react';
import { RadialChart } from 'react-vis';

const RosePlot = () => {
  // Data for the rose plot (customize this data according to requirements)
  const data = [
    { angle: 60, radius: 1 },
    { angle: 60, radius: 2 },
    { angle: 60, radius: 3 },
    { angle: 60, radius: 4 },
    { angle: 60, radius: 5 },
    { angle: 60, radius: 1 },
  ];

  // Configuration for the radial chart
  const chartConfig = {
    innerRadius: 100, // Adjust the inner radius of the semi-circle
    radius: 200, // Adjust the outer radius of the semi-circle
    padAngle: 0.04, // Adjust the gap between sections (in radians)
    showLabels: false, // Hide labels for each section
    showTicks: false, // Hide radial ticks
    width: 400, // Set the width of the chart
    height: 300, // Set the height of the chart
    colorRange: ['blue', 'green', 'red', 'purple', 'orange', 'yellow'], // Customize section colors
  };

  return <RadialChart data={data} {...chartConfig} />;
};

export default RosePlot;