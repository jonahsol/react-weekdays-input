import React from 'react';

import DaysOfTheWeekInput from './DaysOfTheWeekInput';

export default {
  title: 'DaysOfTheWeekInput/DaysOfTheWeekInput',
  component: DaysOfTheWeekInput,
  argTypes: {
      step: { control: 'number' }
  },
};

const Template = (args) => <DaysOfTheWeekInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    step: 2,
    days: [
        'monday', 
        'thuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
    ]
};

export const Secondary = Template.bind({});
Secondary.args = {
    step: 3,
    days: [
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
        'dimanche'
    ]
};