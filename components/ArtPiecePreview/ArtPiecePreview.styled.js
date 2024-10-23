import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  background-color: var(--background-color-secondary);
  color: var(--white);
`;

export const StyledTitle = styled.div`
  padding: 0.8em 0.8em;
  color: var(--white);
`;

export const StyledPieceTitle = styled.h4`
    color: var(--white)
    text-decoration: none;
    text-transform: uppercase;    

    `;

export const StyledArtistName = styled.span`
  line-height: 0;
  font-size: 12px;
  font-weight: bold;
  color: var(--white);
`;

export const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
