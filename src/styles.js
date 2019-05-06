import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto 10px auto;
  border: 1px solid #2d3436;
  max-width: 1000px;
  width: 90%;
  padding: 10px;
`;

export const Header = styled.header`
  margin: 0 auto 10px auto;
  width: 100%;
  padding: 10px;
  background: #00b894;
  color: #fff;
`;

export const Title = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 8px;
  text-transform: capitalize;
`;

export const MetaContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  background: #2d3436;
  color: #fff;
  padding: 10px;
  border: 1px solid #2d3436;
`;

export const DetailContainer = styled.div`
  display: block;
  align-items: center;

  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

export const StatsContainer = styled.div`
  flex: 3;
`;

export const SelectContainer = styled.div`
  flex: 1;
  color: unset;
`;

export const SelectWrapper = styled.div`
  width: 200px;
  color: #000;
  text-align: left;
  margin: 8px auto;

  @media only screen and (min-width: 992px) {
    margin: unset;
  }
`;
