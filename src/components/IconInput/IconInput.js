import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const iconSizing = {
  small: 16,
  large: 24,
};

const inputSizing = {
  small: css`
    height: ${24 / 16}rem;
    font-size: ${14 / 16}rem;
    padding-left: 24px;
    border-width: 1px;
  `,
  large: css`
    height: ${32 / 16}rem;
    font-size: ${18 / 16}rem;
    padding-left: 32px;
    border-width: 2px;
  `,
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input size={size} width={width} {...delegated} />
      <InputIcon id={icon} size={iconSizing[size]} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  max-width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  color: inherit;
  width: ${p => p.width}px;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  
  ${props => inputSizing[props.size]}

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: ${p => p.size}px;
  margin: auto;
  pointer-events: none;
`;

export default IconInput;
