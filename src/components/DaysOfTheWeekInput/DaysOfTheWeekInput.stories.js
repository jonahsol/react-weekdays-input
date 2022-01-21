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
    const [daysObject, setDaysObject] = useState([0, 1, 0, 0, 0, 1, 1])
    return (<>
        <span>String value</span>
        <DaysOfTheWeekInput value={days} onChange={(value) => setDays(value)} {...args} />
        <span>Object value</span>
        <DaysOfTheWeekInput value={daysObject} onChange={(value) => setDays(setDaysObject)} {...args} />
    </>)
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
    days:[
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ]  ,      
    showChars:2, //mo, tu, we, th, fr, sa, su
    activeDayStyle:{
        backgroundColor: 'green',
        color: 'white'
    },
    inactiveDayStyle:{
        backgroundColor: 'pink',
        color: 'black'
    },
    inputStyle:{
        margin: '10px',
        color: 'white',
    },
    dayStyle:{
        border: '2px dotted black',
    },
};