# Days of the week input
## installation
`npm i @axelmy318/days-of-the-week-input@latest`
## Description
This is a react input that allows the users to select days of the week with a simple and user friendly interface

![Example](https://i.imgur.com/7JxIvSY.png)

## Usage

```javascript
import React, { useState } from 'react'
import DaysOfTheWeekInput from 'days-of-the-week-input'

const Example = () => {
    const [days, setDays] = useState('0010010') //Wednesday and saturday active

    return (
        <>
            {/*Using default styling and props*/}
            <DaysOfTheWeekInput
                value={days}
                onChange={(value) => setDays(value)}
            />

            {/*Using custom props*/}
            <DaysOfTheWeekInput
                value={days}
                onChange={(value) => setDays(value)}
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
            />
        </>
    )
}

export default Example
```

## API

| Properties | type | default | description |
|--|--|--|--|
| value | string | "0000000" | A string representing the active days of the week. 0 being inactive, 1 being active. |
| showChars | int | 2 | The numbers of chars to show for the days names. Ex: Monday=Mo |
| onChange | function | | The function that will be called when the user clicks on a day |
| days | array | ['monday','tuesday','wednesday'... | The array defining the name of the days |
| activeColor | string | 'skyblue' | The background color of active days |
| inactiveColor | string | 'transparent' | The background color of inactive days |
| inputStyle | object |  | The CSS styling of the whole input |
| dayStyle | object |  | The CSS styling used for each days |

