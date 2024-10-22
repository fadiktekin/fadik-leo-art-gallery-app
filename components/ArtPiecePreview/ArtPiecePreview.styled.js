import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: Column;
    flex-basis:30%;
    background-color: var(--secondary-background-color);
    color: var(--primary-font-color);`
  ;

  export const StyledTitle = styled.div`
    padding:0.8em 0.8em;
    color: var(--primary-color);
    background-color:var(--primary-background-color)`
  ;

  export const StyledPieceTitle = styled.h4`
    line-height: 0;
    color: var(--primary-color)
    text-decoration: none;
    text-transform: uppercase;
    background-color:var(--primary-background-color)
    `
  ;

  export const StyledArtistName = styled.span`
    line-height: 0;
    font-size:12px;
    font-weight:bold;
    color: var(--primary-color);
    background-color:var(--primary-background-color)`
  ;