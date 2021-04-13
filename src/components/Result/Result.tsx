import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import DateFormatted from '../../date';
import { TitleRow, ResultWrapper } from './Styled';

interface IProps {
  diff: number;
}

const Result = (props: IProps) => {
  // TODO remove magic number
  const invalidValues = props.diff === -1;

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
          <Row
              className="justify-content-md-center"
            >
              <Col md="3">
                <Table responsive="md" borderless>
                  <thead>
                    <tr>
                      <th>Miliseconds</th>
                      <th>Minutes</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>{props.diff}</td>
                    <td>{DateFormatted.convertToMinutes(props.diff)}</td>
                    <td>{DateFormatted.convertToHours(props.diff)}</td>
                  </tbody>
                </Table>
              </Col>
            </Row>
        ) : null
      }
      <Row
        className="justify-content-md-center"
      >
        <h6>
          {invalidValues ?
            'You should type two dates in timestamp format' :
            'This table shows the result(final-start) in different units'}
        </h6>
      </Row>
    </ResultWrapper>
  );
}

export default Result;
