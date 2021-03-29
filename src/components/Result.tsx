import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import DateFormatted from '../date';

interface IProps {
  diff: number;
}

const Result = (props: IProps) => {
  const invalidValues = props.diff === -1;
  
  return (
    <>
      <Row
        className="justify-content-md-center"
        style={{ padding: 25, backgroundColor: invalidValues ? "#f1c40f" : "#2ecc71" }}
      >
        <h4>
          {invalidValues ?
            'No valid timestamps' :
            `Time difference`}
        </h4>
      </Row>
      <Row
        className="justify-content-md-center"
        style={{ backgroundColor: invalidValues ? "#f1c40f" : "#2ecc71" }}
      >
        <Col md="3">
          <Table responsive="md" borderless>
            <thead>
              <tr>
                <th>Miliseconds</th>
                <th>=</th>
                <th>Minutes</th>
                <th>=</th>
                <th>Hour</th>
              </tr>
            </thead>
            <tbody>
              <td>{props.diff}</td>
              <td>=</td>
              <td>{DateFormatted.convertToMinutes(props.diff)}</td>
              <td>=</td>
              <td>{DateFormatted.convertToHours(props.diff)}</td>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Result;
