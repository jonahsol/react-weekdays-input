import React, { useState } from 'react';

import DaysOfTheWeekInput from './DaysOfTheWeekInput';

export default {
  title: 'DaysOfTheWeekInput/DaysOfTheWeekInput',
  component: DaysOfTheWeekInput,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    const [days, setDays] = useState('0001000')
    console.log(days)
    return (<DaysOfTheWeekInput value={days} onChange={(value) => setDays(value)} {...args} />)
};

export const Primary = Template.bind({});
Primary.args = {
    showChars: 2,
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
    showChars: 3,
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