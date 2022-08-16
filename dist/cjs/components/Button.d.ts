/// <reference types="react" />
import { ButtonProps as BsButtonProps } from 'react-bootstrap';
export interface ButtonProps extends BsButtonProps {
    scale?: string;
}
export declare const Button: ({ scale, children, ...props }: ButtonProps) => JSX.Element;
