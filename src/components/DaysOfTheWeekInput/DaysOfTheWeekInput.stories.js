import React from 'react';

import DaysOfTheWeekInput from './DaysOfTheWeekInput';

export default {
  title: 'DaysOfTheWeekInput/DaysOfTheWeekInput',
  component: DaysOfTheWeekInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <DaysOfTheWeekInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  step: 2
};

export const Secondary = Template.bind({});
Secondary.args = {
  step: 3
};