import React from "react";
import Plot from "react-plotly.js";

function Histogram({ data, year }) {
  const data_to_render = data[year];
  const within = data_to_render.data[0];
  const outside = data_to_render.data[1];
  const { avg } = data_to_render;
  return (
    <Plot
      data={[
        {
          x: outside,
          name: "outside std.dev",
          type: "histogram",
          autobinx: false,
          opacity: 0.4,
          marker: {
            color: "#00b894"
          },
          xbins: {
            end: 460,
            size: 10,
            start: 100
          }
        },
        {
          x: within,
          name: "within std.dev",
          type: "histogram",
          autobinx: false,
          opacity: 1,
          marker: {
            color: "#00b894"
          },
          xbins: {
            end: 460,
            size: 10,
            start: 100
          }
        }
      ]}
      layout={{
        bargap: 0.02,
        barmode: "overlay",
        autosize: true,
        showlegend: true,
        legend: {
          orientation: 'h'
        },
        margin: {
          t: 10,
          b: 30
        },
        sliders: {
          visible: false
        },
        xaxis: { showgrid: false, fixedrange: true, range: [100, 400] },
        yaxis: { showgrid: false, fixedrange: true },
        shapes: [
          {
            type: "line",
            x0: avg,
            y0: 0,
            x1: avg,
            y1: 15,
            line: {
              color: "#d63031",
              width: 3,
              dash: "dot"
            }
          }
        ]
      }}
      style={{
        height: 250,
        width: "100%"
      }}
      config={{
        displayModeBar: false,
        responsive: true
      }}
    />
  );
}

export default Histogram;
