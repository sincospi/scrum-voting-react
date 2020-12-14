import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div,
  & > img {
    margin-top: 20px;
  }
  & > img {
    height: 80px;
    width: length * 107px;
  }
  & > div {
    padding-bottom: 30px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <img
        src="https://www.socialworkers.org/portals/0/Images/_Advocacy/social-justice/voting-banner.jpg"
        alt="Voting Banner: My Vote Counts"
      />
      <div>
        Source Code:
        <a href="https://github.com/sincospi/scrum-voting-nodejs">
          BackEnd
        </a>,{" "}
        <a href="https://github.com/sincospi/scrum-voting-react">FrontEnd</a>
      </div>
    </StyledFooter>
  );
}
