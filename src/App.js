import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Slider from "./components/Slider";
import LineChart from "./components/LineChart";
import Histogram from "./components/Histogram";
import Boxplot from "./components/Boxplot";
import avg_data from "./matches_avg.json";
import histo_data from "./matches_histo.json";

const Container = styled.div`
  margin: 0 auto 10px auto;
  border: 1px solid #2d3436;
  max-width: 1000px;
  width: 90%;
  padding: 10px;
`;

const Header = styled.header`
  margin: 5px auto 0 auto;
  border: 1px solid #2d3436;
  max-width: 1000px;
  width: 90%;
  padding: 10px;
  background: #2d3436;
  color: #fff;
`;

const Title = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 8px;
`;

function App() {
  const [value, setValue] = useState(1971);
  const [width, setWidth] = useState(0);
  const onChange = e => {
    setValue(e.target.value);
    setWidth(_input.current.clientWidth);
  };
  const _input = React.createRef();
  const avg = histo_data[value].avg.toFixed(2);
  const std = histo_data[value].std.toFixed(2);
  const { max, min, range } = histo_data[value];

  return (
    <div className="App">
      <Header>
        <Title>
          Cricket ODI Matches - First innings scores distribution by year
        </Title>
        <strong>&nbsp;&nbsp;&nbsp;Mean:</strong> {avg},
        <strong>&nbsp;&nbsp;&nbsp;Std. dev:</strong> {std}
        <strong>&nbsp;&nbsp;&nbsp;Max:</strong> {max},
        <strong>&nbsp;&nbsp;&nbsp;Min:</strong> {min}
        <strong>&nbsp;&nbsp;&nbsp;Range:</strong> {range}
      </Header>
      <Container>
        <Histogram data={histo_data} year={value} />
        <Boxplot data={histo_data} year={value} />
        <Slider
          value={value}
          width={width}
          onChange={onChange}
          inputRef={_input}
        />
        <LineChart value={value} data={avg_data} />
      </Container>
    </div>
  );
}

export default App;
