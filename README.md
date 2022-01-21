# Days of the week input
## installation
`npm i @axelmy318/days-of-the-week-input@latest`
## Description
A highly customizable and easy to use react input that allows users to select days of the week with a user friendly interface

![Example](https://i.imgur.com/7JxIvSY.png)

## Usage

```javascript
import React, { useState } from 'react'
import { DaysOfTheWeekInput } from '@axelmy318/days-of-the-week-input'

const Example = () => {
    const [daysAsString, setDaysAsString] = useState('0010010') //Wednesday and saturday active
    const [daysAsObject, setDaysAsObject] = useState([0, 0, 1, 0, 0, 1, 0]) //Wednesday and saturday active

    return (
        <>
            {/*Using default styling and props*/}
            <DaysOfTheWeekInput
                value={daysAsString}
                onChange={(value) => setDaysAsString(value)}
            />

            {/*Using custom props*/}
            <DaysOfTheWeekInput
                value={daysAsObject}
                onChange={(value) => setDaysAsObject(value)}
                days={[
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                    'sunday'
                ]}        
                showChars={2} //mo, tu, we, th, fr, sa, su
                activeColor='#ffaaaa'
                inactiveColor='#101010'
                inputStyle={{
                    margin: '10px',
                }}
                dayStyle={{
                    border: '2px dotted black',
                }}
                forcedState={{
                    0: 'none',
                    1: 'none',
                    2: 'active',
                    3: 'inactive',
                    4: 'none',
                    5: 'none',
                    6: 'none'
                }}
            />
        </>
    )
}

export default Example
```

## API

| Properties | type | default | description |
|--|--|--|--|
| value | string/array(int) | "0000000" | A string or an array of 7 integers representing the active days of the week. 0 being inactive, 1 being active. |
| showChars | int | 2 | The numbers of chars to show for the days names. Ex: Monday=Mo |
| onChange | function | | The function that will be called when the user clicks on a day |
| days | array | ['monday','tuesday','wednesday'... | The array defining the name of the days |
| activeDayStyle | string |  | The CSS styling to apply to active days |
| inactiveDayStyle | string |  | The CSS styling to apply to inactive days |
| inputStyle | object |  | The CSS styling of the whole input |
| dayStyle | object |  | The CSS styling used for each days |
| forcedState | object |  | Force certain days to be active or inactive. See examples above |

