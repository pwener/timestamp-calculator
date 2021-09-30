import React, { Dispatch, SetStateAction } from "react";
import {
  faHourglassEnd,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

import DateFormatter from "./date";
import Explain from "./components/Explain/Explain";
import Header from "./components/Header";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import colors from "./colours";

const INVALID_STATE = -1;

type DateSetState = Dispatch<SetStateAction<DateFormatter | undefined>>;

const App = () => {
  const [start, setStart] = React.useState<DateFormatter>();
  const [end, setEnd] = React.useState<DateFormatter>();

  const calculate = (): number => {
    if (start && end) {
      if (start?.timestamp <= 0 || end?.timestamp <= 0) {
        return INVALID_STATE;
      }
      return end?.timestamp - start?.timestamp;
    }
    return INVALID_STATE;
  };

  const format = (setState: DateSetState) => (dateValue: number) => {
    if (dateValue > 0) {
      return setState(new DateFormatter(dateValue));
    }
    setState(undefined);
  };

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
        icon={faHourglassStart}
      />
      <Input
        placeholder="Type the second timestamp"
        label="Final"
        date={end}
        onChange={setEndHighOrderFn}
        color={colors.secondary}
        icon={faHourglassEnd}
      />
      <Result diff={calculate()} />
      <Explain />
    </>
  );
};

export default App;
