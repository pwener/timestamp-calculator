import React, { useState } from 'react';
import { ButtonGroup, Row, ToggleButton } from 'react-bootstrap';
import DateFormatted from '../../date';
import { TitleRow, ResultWrapper, ResultNumber } from './Styled';

interface IProps {
  diff: number;
}

const Result = (props: IProps) => {
  // TODO remove magic number
  const invalidValues = props.diff === -1;
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Milliseconds', value: '1'},
    { name: 'Seconds', value: '2', callback: DateFormatted.convertToSeconds },
    { name: 'Minutes', value: '3', callback: DateFormatted.convertToMinutes },
    { name: 'Hours', value: '4', callback: DateFormatted.convertToHours },
  ];

  const convertCallback = radios.find(r => r.value === radioValue)?.callback;

  return (
    <ResultWrapper
      invalidValues={invalidValues}
    >
      <TitleRow
        className="justify-content-md-center"
      >
        <h4>
          {invalidValues ?
            'No valid timestamps' :
            `Difference Result`}
        </h4>
      </TitleRow>
      { !invalidValues ? (
          <>
            <Row className="justify-content-md-center">
              <ResultNumber>
                {convertCallback ? convertCallback(props.diff) : props.diff}
              </ResultNumber>
            </Row>
            <Row className="justify-content-md-center">
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="outline-dark"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Row>
          </>
        ) : null
      }
      <Row
        className="justify-content-md-center"
      >
          {invalidValues ?
            'You should type two dates in timestamp format' :
            null}
      </Row>
    </ResultWrapper>
  );
}

export default Result;
