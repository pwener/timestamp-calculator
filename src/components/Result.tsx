import React from 'react';
import { Card } from 'react-bootstrap';

interface IProps {
  diff: number;
}

const Result = (props: IProps) => {
  const invalidValues = props.diff === -1;
  
  return (
    <Card bg={invalidValues ? "warning" : "success"}>
      <Card.Body>
        { invalidValues ? 
          'No valid timestamps' : 
          `Time difference between date is ${props.diff} ms`}
      </Card.Body>
    </Card>
  );
}

export default Result;
