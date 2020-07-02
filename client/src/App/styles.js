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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const ConsoleWrapper = styled.div`
  height: 66%;
  max-height: 66%;
  min-height: 66%;

  @media (max-width: 768px) {
    max-width: 66%;
    min-width: 66%;
    max-height: 97%;
    min-height: 97%;
  }
`;

const ControlWrapper = styled.div`
  max-height: 32%;
  min-height: 32%;
  padding-top: 1rem;
  @media (max-width: 768px) {
    padding-top: 0;
    padding-left: 1rem;
    max-width: 32%;
    min-width: 32%;
    max-height: 97%;
    min-height: 97%;
  }
`;

export { Application, HomePageWrapper, ConsoleWrapper, ControlWrapper };
