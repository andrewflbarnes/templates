import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExternalComponent from '@containers/External';

export default {
  title: 'Pages/External',
  component: ExternalComponent,
} as ComponentMeta<typeof ExternalComponent>;

const Template: ComponentStory<typeof ExternalComponent> = (args) => <ExternalComponent {...args} />

export const External = Template.bind({});