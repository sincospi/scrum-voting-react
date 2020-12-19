import styled from "styled-components";

export default function nameScoreGrid(component) {
  return styled(component)`
    display: grid;
    grid-template-columns: 3fr 1fr;
    & > * {
      align-self: center;
    }
    & > :nth-child(2) {
      text-align: center;
    }
  `;
}
