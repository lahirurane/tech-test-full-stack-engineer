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

const ContolItemWrapper = styled.div`
  padding: 1rem;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const Button = styled.button`
  background-color: #03dac5;
  border: none;
  color: #1e1e1e;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  height: 90%;
  width: 100%;
  :hover {
    cursor: pointer;
    background-color: #03bba9;
  }
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    height: 90%;
    width: 100%;
  }
  @media (max-width: 320px) {
    font-size: 0.5rem;
    padding: 0.2rem;
    height: 100%;
    width: 90%;
  }
`;

const ButtonLanding = styled(Button)`
  margin-left: 1rem;
  flex: 1;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const TextField = styled.input`
  padding: 1rem;
  display: block;
  height: 80%;
  font-size: 1.5rem;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  @media (max-width: 768px) {
    padding: 0.2rem;
    width: 95%;
    height: 50%;
  }
`;

const RocketWrapper = styled.div`
  height: 60%;
  width: 60%;
  svg {
    height: 100%;
    width: 100%;
  }
  svg:hover {
    fill: #eeeeee;
  }
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

export { ControlView, Button, ContolItemWrapper, TextField, ButtonLanding, RocketWrapper };
