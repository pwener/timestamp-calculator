import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import DateFormatted from '../../date';
import ConvertedTable from './ConvertedTable';
import { TitleRow, InputWrapper, FormInput } from './Styled';

interface IProps {
  date: DateFormatted | undefined;
  onChange: (dateTimestamp: number) => void;
  label: string;
  placeholder: string;
  color: string;
  icon: IconDefinition;
}

const Input = ({date, onChange, label, placeholder, color, icon}: IProps) => {
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

  return (
    <InputWrapper color={color}>
      <TitleRow
        className="justify-content-md-center"
      >
        <Form>
          <Form.Label>
            <FontAwesomeIcon icon={icon} color="#636e72" />
            {" " + label}
          </Form.Label>
          <FormInput
            type="text"
            placeholder={placeholder}
            value={date?.timestamp || ''}
            color={color}
            onChange={(e: any) => handleChange(e)}
          />
        </Form>
          {/* TODO: change to relative component */}
        <h5 style={{width: 200}}>
          <FontAwesomeIcon icon={faClock} color="#636e72" />
          {" " + relativeDate}
        </h5>
      </TitleRow>
      <ConvertedTable date={date} />
    </InputWrapper>
  );
}

export default Input;