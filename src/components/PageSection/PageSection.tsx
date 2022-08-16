import React from 'react';
import { Container, ContainerProps } from 'react-bootstrap';

export interface PageSectionProps extends ContainerProps {}

export const PageSection: React.FC<PageSectionProps> = ({ children, ...props }) => {
  return <Container fluid>{children}</Container>;
};
