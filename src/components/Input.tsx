import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Table } from "react-bootstrap";
import DateFormatted from '../date';

interface IProps {
  date: DateFormatted | undefined;
  onChange: (dateTimestamp: number) => void;
  label: string;
  placeholder: string;
  finalField?: boolean;
}

// TODO type later
const TableContent = ({children}: {children: React.ReactNode}) => <td>{children}</td>

const Input = ({date, onChange, label, placeholder, finalField}: IProps) => {
  const [relativeDate, setRelativeDate] = useState('-');
  
  const handleChange = (event: any) => {
    let fieldValue = event.target.value;
    onChange(parseInt(fieldValue, 10));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const relativeDate = date?.getRelativeDate() || '-';
      setRelativeDate(relativeDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [date])

  const formatValue = (value?: number) => date ? value : '-';

  const color = finalField ? "#95a5a6" : "#bdc3c7";

  return (
    <>
      <Row
        className="justify-content-md-center"
        style={{ backgroundColor: color, paddingBottom: 20, paddingTop: 20 }}
      >
        <Form>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type="text"
            placeholder={placeholder}
            value={date?.timestamp || ''}
            onChange={(e) => handleChange(e)}
            style={{
              backgroundColor: color,
              borderRadius: 0,
              border: "solid 0px",
              borderBottom: "solid 2px #ecf0f1",
              fontSize: 36
            }} />
        </Form>
          {/* TODO: change to relative component */}
        <h5 style={{width: 200}}>{relativeDate}</h5>
      </Row>
        <Row
          className="justify-content-md-center"
          style={{ backgroundColor: color, padding: 0 }}
        >
          <Col md="5">
            <Table borderless size="sm">
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
                  <TableContent>{formatValue(date?.year)}</TableContent>
                  <TableContent>{formatValue(date?.month)}</TableContent>
                  <TableContent>{formatValue(date?.day)}</TableContent>
                  <TableContent>{formatValue(date?.hour)}</TableContent>
                  <TableContent>{formatValue(date?.minute)}</TableContent>
                  <TableContent>{formatValue(date?.second)}</TableContent>
                  <TableContent>{formatValue(date?.millisecond)}</TableContent>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
  );
}

export default Input;