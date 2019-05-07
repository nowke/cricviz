import React, { useState } from "react";

import "./App.css";
import Slider from "./components/Slider";
import LineChart from "./components/LineChart";
import Histogram from "./components/Histogram";
import Boxplot from "./components/Boxplot";
import Selector from "./components/Selector";
import avg_data from "./matches_avg.json";
import histo_data from "./matches_histo.json";
import teams from "./teams.json";
import {
  Container,
  Header,
  Title,
  MetaContainer,
  DetailContainer,
  StatsContainer,
  SelectContainer,
  SelectWrapper
} from "./styles";

const data = [
  { label: "Teams (All)", value: "*" },
  ...teams.map(i => ({ label: i, value: i }))
];

function App() {
  const [year, setYear] = useState(1971);
  const [width, setWidth] = useState(0);
  const [team, setTeam] = useState(data[0]);
  const onChange = e => {
    setYear(e.target.value);
    setWidth(_input.current.clientWidth);
  };
  const _input = React.createRef();
  const histo = histo_data[year][team.value] || {
    data: [[0], [0]],
    avg: 0,
    std: 0,
    min: 0,
    max: 0,
    range: 0
  };
  const avg = histo.avg.toFixed(2);
  const std = histo.std.toFixed(2);
  const { max, min, range } = histo;

  return (
    <div className="App">
      <Header>
        <Title>
          Cricket ODI Matches - First innings scores distribution by year&nbsp;&nbsp;
          <a
            href="https://github.com/nowke/cricviz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', color: '#fff' }}
          >
            [GitHub]
          </a>
        </Title>
      </Header>
      <MetaContainer>
        <DetailContainer>
          <StatsContainer>
            <strong>&nbsp;&nbsp;&nbsp;Mean:</strong> {avg},
            <strong>&nbsp;&nbsp;&nbsp;Std. dev:</strong> {std},
            <strong>&nbsp;&nbsp;&nbsp;Max:</strong> {max},
            <strong>&nbsp;&nbsp;&nbsp;Min:</strong> {min}
            <strong>&nbsp;&nbsp;&nbsp;Range:</strong> {range}
          </StatsContainer>
          <SelectContainer>
            <SelectWrapper>
              <Selector value={team} data={data} onChange={t => setTeam(t)} />
            </SelectWrapper>
          </SelectContainer>
        </DetailContainer>
      </MetaContainer>
      <Container>
        <Histogram data={histo} team={team.value} />
        <Boxplot data={histo} />
        <Slider
          year={year}
          width={width}
          onChange={onChange}
          inputRef={_input}
        />
        <LineChart year={year} data={avg_data[team.value]} />
      </Container>
    </div>
  );
}

export default App;
