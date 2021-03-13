import React, { Dispatch, SetStateAction } from 'react';
import { Form as ReactForm, Col, Row } from "react-bootstrap";

interface IProps {
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
}

const Input = (props: IProps) => {
  const handleChange = (event: any) => {
    let fieldValue = event.target.value;
    console.log(fieldValue);
    props.onChange(fieldValue);
  }

  return (
    <Row className="justify-content-md-center" style={{ marginBottom: 10 }}>
      <Col md="2">
        <ReactForm>
          <ReactForm.Control
            type="text"
            placeholder="Timestamp 1"
            value={props.value || ''}
            onChange={(e) => handleChange(e)}
          />
        </ReactForm>
      </Col>
    </Row>
  );
}

export default Input;