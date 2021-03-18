import React from 'react';
import { Form, Col, Row, Table } from "react-bootstrap";
import DateFormatted from '../date';

interface IProps {
  date: DateFormatted | undefined;
  onChange: (dateTimestamp: number) => void;
  label: string;
  placeholder: string;
}

const Input = ({date, onChange, label, placeholder}: IProps) => {
  const handleChange = (event: any) => {
    let fieldValue = event.target.value;
    onChange(parseInt(fieldValue, 10));
  }

  return (
    <Row className="justify-content-md-center" style={{ marginBottom: 10 }}>
      <Col md="2">
        <Form>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="text"
            placeholder={placeholder}
            value={date?.timestamp || ''}
            onChange={(e) => handleChange(e)}
          />
        </Form>
      </Col>
      <Col md="4">
        <h5>Relative time: {date?.getRelativeDate()}</h5>
        <Table striped bordered size="sm">
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              <th>Day</th>
              <th>Hour</th>
              <th>Min.</th>
              <th>Sec.</th>
              <th>Milli.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{date ? date.year : '-'}</td>
              <td>{date ? date.month : '-'}</td>
              <td>{date ? date.day : '-'}</td>
              <td>{date ? date.hour : '-'}</td>
              <td>{date ? date.minute : '-'}</td>
              <td>{date ? date.second : '-'}</td>
              <td>{date ? date.millisecond : '-'}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Input;