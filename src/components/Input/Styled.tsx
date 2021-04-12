import { Row, Form, Container } from 'react-bootstrap';
import styled from 'styled-components';

const InputWrapper = styled(Container)`
  background-color: ${({color}) => color};
`;
InputWrapper.defaultProps = {
  fluid: true,
}

const TitleRow = styled(Row)`
  padding-bottom: 20px;
  padding-top: 20px; 
`;

const ConvertedRow = styled(Row)`
  padding: 0px;
`;

const FormInput = styled(Form.Control)`
  background-color: ${({color}) => color};
  border-radius: 0px;
  border: solid 0px;
  border-bottom: solid 2px #ecf0f1;
  font-size: 36px;
`;

export {
  TitleRow,
  ConvertedRow,
  InputWrapper,
  FormInput,
};