import React from "react";
import Plot from "react-plotly.js";

function LineChart({ year, data }) {
  return (
    <Plot
      data={[
        {
          x: data.x,
          y: data.y,
          type: "scatter",
          mode: "lines",
          hoverinfo: "skip",
          marker: { color: "#2d3436" }
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
        xaxis: { showgrid: true, fixedrange: true },
        yaxis: {
          showgrid: true,
          fixedrange: true,
          range: [Math.min(data.y) - 20, Math.max(data.y) + 20]
        },
        shapes: [
          {
            type: "line",
            x0: year,
            y0: 0,
            x1: year,
            y1: 300,
            line: {
              color: "#d63031",
              width: 3,
              dash: "dot"
            }
          }
        ]
      }}
      style={{
        height: 200,
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
