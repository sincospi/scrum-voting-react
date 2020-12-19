import React from "react";
import styled from "styled-components";

const StyledTimestamp = styled.div`
  font-size: 1rem;
  padding: 10px;
`;

export default function Timestamp({ className, timestamp }) {
  return (
    <StyledTimestamp className={className}>
      Sync:{" "}
      <time>
        {timestamp ? new Date(Date.parse(timestamp)).toLocaleString() : "-"}
      </time>
    </StyledTimestamp>
  );
}
