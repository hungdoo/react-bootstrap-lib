import React from 'react';
/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0';
import { Row, Stack } from 'react-bootstrap';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {}
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      <Button active>Active</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
    </div>
  );
};
