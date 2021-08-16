import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MessageComponent from '@containers/Message';

export default {
  title: 'Pages/Message',
  component: MessageComponent,
} as ComponentMeta<typeof MessageComponent>;

const Template: ComponentStory<typeof MessageComponent> = (args) => <MessageComponent {...args} />;

export const Message = Template.bind({});