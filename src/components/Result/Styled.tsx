import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../../colours';

const ResultWrapper = styled.div`
  background-color: ${({ invalidValues }) => invalidValues ? colors.lightError : colors.success};
`;
ResultWrapper.defaultProps = {
  fluid: true,
}

const TitleRow = styled(Row)`
  padding-top: 20px;
`;

export {
  TitleRow,
  ResultWrapper
};