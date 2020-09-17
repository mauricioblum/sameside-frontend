import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const StyledButton = styled.button<{ appearence?: string }>`
  cursor: pointer;
  border: 0;
  outline: 0;
  background: ${props =>
    props.appearence === 'secondary'
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: -0.21px;
  border-radius: 4px;
  text-align: center;
  padding: 9px 20px 12px 20px;
  width: 439px;
  transition: background 0.2s;
  @media (max-width: 460px) {
    width: 339px;
  }
  @media (max-width: 390px) {
    width: 300px;
  }
  @media (max-width: 360px) {
    width: 279px;
  }
  &:hover {
    background: ${props =>
      props.appearence === 'secondary'
        ? darken(0.1, props.theme.colors.secondary)
        : darken(0.1, props.theme.colors.primary)};
  }
  &:focus {
    background: ${props =>
      props.appearence === 'secondary'
        ? darken(0.1, props.theme.colors.secondary)
        : darken(0.1, props.theme.colors.primary)};
  }
`;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  appearence?: 'primary' | 'secondary';
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = props => {
  const { children, appearence, type } = props;

  return (
    <StyledButton type={type || 'button'} {...props} appearence={appearence}>
      {children}
    </StyledButton>
  );
};

export default Button;
