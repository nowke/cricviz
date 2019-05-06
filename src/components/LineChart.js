import React from "react";
import Plot from "react-plotly.js";

function LineChart({ year, data }) {
  return (
    <Plot
      data={[
        {
          x: [...data.x, ...data.x.slice().reverse()],
          y: [
            ...data['z-1'],
            ...data['z+1'].slice().reverse(),
          ],
          type: "scatter",
          fill: "tonexty",
          fillcolor: "rgba(0,176,246,0.2)",
          line: { color: "transparent" },
          showlegend: false,
          name: "Error"
        },
        {
          x: data.x,
          y: data.y,
          type: "scatter",
          mode: "lines",
          hoverinfo: "skip",
          marker: { color: "#2d3436" },
          showlegend: false,
          name: "line"
        }
      ]}
      layout={{
        margin: {
          t: 10
        },
        autosize: true,
        sliders: {
          visible: false
        },
        xaxis: { showgrid: true, fixedrange: true, zeroline: false },
        yaxis: {
          showgrid: true,
          fixedrange: true,
          zeroline: false,
          range: [Math.min(...data['z-1']) - 20, Math.max(...data['z+1']) + 20]
        },
        shapes: [
          {
            type: "line",
            x0: year,
            y0: 0,
            x1: year,
            y1: Math.max(...data['z+1']) + 20,
            line: {
              color: "#d63031",
              width: 3,
              dash: "dot"
            }
          }
        ]
      }}
      style={{
        height: 300,
        width: "100%"
      }}
      config={{
        displayModeBar: false,
        responsive: true
      }}
    />
  );
}

export default LineChart;
