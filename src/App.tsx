import React, { Dispatch, SetStateAction, useEffect } from 'react';

import './App.css';
import { Container, Row } from 'react-bootstrap';
import Result from './components/Result';
import Header from './components/Header';
import Input from './components/Input';
import DateFormatted from './date';

const INVALID_STATE = -1;


type DateSetState = Dispatch<SetStateAction<DateFormatted | undefined>>;

const App = () => {
  const [ start, setStart ] = React.useState<DateFormatted>();
  const [ end, setEnd ] = React.useState<DateFormatted>();

  const calculate = (): number => {
    if (start && end) {
      if (start?.timestamp <= 0 || end?.timestamp <= 0) {
        return INVALID_STATE;
      }
      return end?.timestamp - start?.timestamp;
    }
    return INVALID_STATE;
  }

  const format = (setState: DateSetState) => (dateValue: number) => {
    if (dateValue > 0) {
      return setState(new DateFormatted(dateValue));
    }
    setState(undefined);
  }

  const setStartHighOrderFn = (input: number) => format(setStart)(input);
  const setEndHighOrderFn = (input: number) => format(setEnd)(input);

  return (
    <Container fluid>
      <Header />
      <Input
        placeholder="Timestamp 1"
        label="Start"
        date={start}
        onChange={setStartHighOrderFn} />
      <Input
        placeholder="Timestamp 2"
        label="Final"
        date={end}
        onChange={setEndHighOrderFn} />
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
