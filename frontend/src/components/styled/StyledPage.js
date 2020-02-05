import styled from 'styled-components';

const StyledPage = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ background }) => background && `
    background: url("https://picsum.photos/700/400/?random") no-repeat center center fixed;
    /* background: lightgrey; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  `}
`;

export default StyledPage;
