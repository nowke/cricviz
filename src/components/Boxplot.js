import React from "react";
import Plot from "react-plotly.js";

function Boxplot({ data, year }) {
  const data_to_render = data[year];
  const data_combined = [...data_to_render.data[0], ...data_to_render.data[1]];
  return (
    <Plot
      data={[
        {
          x: data_combined,
          type: "box",
          boxmean: true,
          name: "",
          hoverinfo: "skip",
          marker: { color: "#d63031" },
          line: {
            color: "#d63031"
          },
          fillcolor: "rgba(250, 177, 160, 0.5)"
        }
      ]}
      layout={{
        bargap: 0.02,
        autosize: true,
        margin: {
          t: 0,
          b: 0
        },
        sliders: {
          visible: false
        },
        xaxis: {
          visible: false,
          showgrid: false,
          fixedrange: true,
          range: [100, 400]
        },
        yaxis: { showgrid: false, fixedrange: true }
      }}
      style={{
        height: 100,
        width: "100%"
      }}
      config={{
        displayModeBar: false,
        responsive: true
      }}
    />
  );
}

export default Boxplot;
