import { Col, Table } from "react-bootstrap";

import { ConvertedRow } from "./Styled";
import DateFormatter from "../../date";
import React from "react";

interface IConvertedTable {
  date: DateFormatter | undefined;
}

const ConvertedTable = ({ date }: IConvertedTable) => {
  const formatValue = (value?: number) => (date ? value : "-");

  return (
    <ConvertedRow className="justify-content-md-center">
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
              <td>{formatValue(date?.year)}</td>
              <td>{formatValue(date?.month)}</td>
              <td>{formatValue(date?.day)}</td>
              <td>{formatValue(date?.hour)}</td>
              <td>{formatValue(date?.minute)}</td>
              <td>{formatValue(date?.second)}</td>
              <td>{formatValue(date?.millisecond)}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </ConvertedRow>
  );
};

export default ConvertedTable;
