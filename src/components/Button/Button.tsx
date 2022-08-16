import React from 'react';
import { Button as BsButton, ButtonProps as BsButtonProps } from 'react-bootstrap';

export interface ButtonProps extends BsButtonProps {
  label?: string;
}

export const Button = ({ children, label, ...props }: ButtonProps) => {
  return <BsButton {...props}>{label ? label : children}</BsButton>;
};
