import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
`;

export const Card = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  margin: 0 10px;
  max-width: 300px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  a {
    color: white;
    margin-top: auto;
  }
`;
