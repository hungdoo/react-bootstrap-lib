import React from 'react';
import { Button as BsButton, ButtonProps as BsButtonProps } from 'react-bootstrap';

export interface ButtonProps extends BsButtonProps {
  scale?: string;
}

export const Button = ({ scale, children, ...props }: ButtonProps) => {
  return <BsButton {...props}>{children}</BsButton>;
};
