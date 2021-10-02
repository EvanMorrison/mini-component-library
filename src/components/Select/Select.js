import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect value={value} onChange={onChange}>
      {children}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  color: ${COLORS.gray700};
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  width: min-content;
  min-width: 0;
  border-radius: 8px;
  padding: 10px 16px 12px;
  appearance: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
