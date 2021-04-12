import React, { Dispatch, SetStateAction } from 'react';

import './App.css';
import Result from './components/Result/Result';
import Header from './components/Header';
import Input from './components/Input/Input';
import DateFormatted from './date';
import colors from './colours';

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
    <>
      <Header />
      <Input
        placeholder="Type the first timestamp"
        label="Start"
        date={start}
        onChange={setStartHighOrderFn}
        color={colors.primary}
      />
      <Input
        placeholder="Type the second timestamp"
        label="Final"
        date={end}
        onChange={setEndHighOrderFn}
        color={colors.secondary}
      />
      <Result diff={calculate()} />
    </>  
  );
}

export default App;
