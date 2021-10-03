import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect displayedValue={displayedValue}>
        <span>{displayedValue}</span><SelectIcon id='chevron-down' size={24} />
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: max-content;
  color: ${COLORS.gray700};
  font-size: 1rem;
`;

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  color: inherit;
  display: block;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 48px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: solid ${COLORS.black};
    outline: solid -webkit-focus-ring-color;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: ${p => p.size}px;
  width: ${p => p.size}px;
  right: 10px;
  pointer-events: none;
`;

export default Select;
