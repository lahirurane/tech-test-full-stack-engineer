import styled from 'styled-components';

const Application = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  color: white;
`;

const HomePageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const ConsoleWrapper = styled.div`
  height: 66%;
  padding: 1rem 1rem 0 1rem;
  @media (max-width: 768px) {
    width: 66%;
    height: 100%;
  }
`;

const ControlWrapper = styled.div`
  height: 33%;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 33%;
    height: 100%;
  }
`;

export { Application, HomePageWrapper, ConsoleWrapper, ControlWrapper };
