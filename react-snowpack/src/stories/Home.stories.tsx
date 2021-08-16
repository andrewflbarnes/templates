import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeComponent from '@containers/Home';

export default {
  title: 'Pages/Home',
  component: HomeComponent,
} as ComponentMeta<typeof HomeComponent>;

const Template: ComponentStory<typeof HomeComponent> = (args) => <HomeComponent {...args} />

export const Home = Template.bind({});