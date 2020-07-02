import styled from 'styled-components';

const ControlView = styled.div`
  background: #1e1e1e;
  height: 100%;
  marign: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  background-color: #03dac5;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export { ControlView, Button };
