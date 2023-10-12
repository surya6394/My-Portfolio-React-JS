import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
    const options = {
        title: {
            text: "Basic Column Chart"
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "React JS",  y: 100  },
                    { label: "JavaScript", y: 15  },
                    { label: "Java", y: 25  },
                    { label: "BootStrap",  y: 30  },
                    { label: "Tailwind",  y: 80  },
                    { label: "SQL",  y: 28  },
                    { label: "Spring Framework",  y: 28  }
                ]
            }
        ]
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default BarChart;
