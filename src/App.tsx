import React from 'react';

import './App.css';
import { Container, Row } from 'react-bootstrap';
import Result from './components/Result';
import Header from './components/Header';
import Input from './components/Input';

const App = () => {
  const [ start, setStart ] = React.useState(0);
  const [ end, setEnd ] = React.useState(0);

  const calculate = (): number => {
    if (start === 0 || end === 0) {
      return -1;
    }
    return end - start;
  }

  return (
    <Container fluid>
      <Header />
      <Input value={start} onChange={setStart} />
      <Input value={end} onChange={setEnd} />
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: 50 }}
        >
          <Result diff={calculate()} />
        </Row>
      </Container>
    </Container>      
  );
}

export default App;
