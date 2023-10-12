import React, { useEffect } from 'react';
import CanvasJSReact from './canvasjs.react';

// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = (props) => {
  const options = {
    title: {
      text: 'Bar Chart Example',
    },
    data: [
      {
        type: 'column',
        dataPoints: props.dataPoints,
      },
    ],
  };

  useEffect(() => {
    // Optionally, you can add code here to update the chart when props.dataPoints change.
  }, [props.dataPoints]);

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default BarChart;
