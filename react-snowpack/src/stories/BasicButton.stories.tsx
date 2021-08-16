import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BasicButtonComponent from '@components/BasicButton';

export default {
  title: 'Components/BasicButton',
  component: BasicButtonComponent,
} as ComponentMeta<typeof BasicButtonComponent>;

const Template: ComponentStory<typeof BasicButtonComponent> = (args) => <BasicButtonComponent {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  name: 'name',
  onClick: () => {}
};
BasicButton.storyName = 'BasicButton'; // Prevents start casing from disabling single story hoisting