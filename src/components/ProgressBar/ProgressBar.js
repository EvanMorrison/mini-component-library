/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size = 'medium' }) => {
  let Component = sizing[size];
  if (Component) {
    return (
      <Component
        value={value}
        size={size}
        aria-role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
      >
        <Trimmer size={size}>
          <div className="bar"></div>
        </Trimmer>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Component>
    );
  } else {
    throw new Error(`Invalid "size" prop received: ${size}. Must be one of the following values: "large", "medium", or "small"`)
  }
};

const Trimmer = styled.div`
  border-radius: ${p => p.size === 'large' ? 4 : 2}px;
  /* trims the square corners of the bar as it approaches 100 */
  overflow: hidden;
`;

const BaseProgressBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* trims the square corners of the bar as it approaches 100 */
  overflow: hidden;

  .bar {
    background-color: ${COLORS.primary};
    width: ${props => props.value}%;
  }
`;

const sizing = {
  large: styled(BaseProgressBar)`
    border-radius: 8px;
    padding: 4px;

    .bar {
      border-radius: 4px 0 0 4px;
      height: 16px;
    }

  `,
  medium: styled(BaseProgressBar)`
      border-radius: 2px;

    .bar {
      border-radius: 2px 0 0 2px;
      height: 12px;
    }

  `,
  small: styled(BaseProgressBar)`
    border-radius: 2px;

    .bar {
      border-radius: 2px 0 0 2px;
      height: 8px;
    }
  `,
}


export default ProgressBar;
