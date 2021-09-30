import { Container, Row } from "react-bootstrap";

import styled from "styled-components";

const Wrapper = styled(Container)`
  padding: 20px;
`;
Wrapper.defaultProps = {
  fluid: true,
};

const Explain = () => (
  <Wrapper>
    <Row className="justify-content-md-center">
      <h4>Date now is {Date.now()}</h4>
    </Row>
    <Row className="justify-content-md-center">
      <h4>What is timestamp?</h4>
    </Row>
    <Row className="justify-content-md-center">
      Timestamp is the amount of seconds(or milliseconds) counted since midnight
      on the first day of January 1970. Some references:
    </Row>
    <Row className="justify-content-md-center">
      <a href="https://codeofmatt.com/please-dont-call-it-epoch-time">
        https://codeofmatt.com/please-dont-call-it-epoch-time
      </a>
    </Row>
    <Row className="justify-content-md-center">
      <a href="https://www.eecis.udel.edu/~mills/y2k.html">
        https://www.eecis.udel.edu/~mills/y2k.html
      </a>
    </Row>
  </Wrapper>
);

export default Explain;
