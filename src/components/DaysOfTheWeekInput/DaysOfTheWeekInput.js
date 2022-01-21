import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './DaysOfTheWeekInput.css'

/**
 * 
 * @param {string} value: a string of 7 digits that can each either be 0 or 1
 * @param {number} step: The number of character shown in the button for each days of the week
 * @param {string} lang: The lang of the days to be displayed in the buttons
 * @param {string} onChange: execute the given function passing the new value as a parameter
 * @returns 
 */
const DaysOfTheWeekInput = ({ value, step, onChange, inputStyle, dayStyle, days, activeColor, inactiveColor }) => {
    const styles = {
        input: {
            display: "inline-flex",
        },
        day: {
            border: "1px grey solid",
            padding: "5px",
        },
        inactive: {
            backgroundColor: inactiveColor
        },
        active: {
            backgroundColor: activeColor
        }
    }

    if(inputStyle !== null)
        styles.input = inputStyle
    if(dayStyle !== null)
        styles.day = dayStyle

    const validateValue = (v) => {
        return v.slice(0, 7).split('')
    }

    const [daysOfWeek, setDaysOfWeek] = useState(validateValue(value))

    const selectDay = (e, index) => {
        e.preventDefault()
        let newDaysOfWeek = daysOfWeek
        newDaysOfWeek[index] = newDaysOfWeek[index] === '0' ? '1' : '0'
        onChange(newDaysOfWeek.join(''))
        setDaysOfWeek([...newDaysOfWeek])
    }

    return (
        <div>
            <span className='day-of-week-input' style={styles.input}>
                {
                    daysOfWeek.map((day, index) => {
                        let dayStyle = day === '0' ? {...styles.day, ...styles.inactive} :  {...styles.day, ...styles.active}
                        return (
                        <div 
                            key={index}
                            style={dayStyle} 
                            className={day === '0' ? 'day-of-week-selector clickable' : 'day-of-week-selector selected clickable'}
                            onClick={(e) => selectDay(e, index)}
                        >
                                {days[index].slice(0, step)}
                        </div>
                        )
                    })
                }
            </span>
        </div>
    )
}

DaysOfTheWeekInput.propTypes = {
    value: PropTypes.string,
    step: PropTypes.number,
    onChange: PropTypes.func,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    inputStyle: PropTypes.object,
    dayStyle: PropTypes.object,
}

DaysOfTheWeekInput.defaultProps = {
    value: '0000000',
    step: 2,
    onChange: function(v){},
    days: [
        'monday', 
        'thuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
    ],
    activeColor: 'skyblue',
    inactiveColor: 'transparent',
    inputStyle: null,
    dayStyle: null
}

export default DaysOfTheWeekInput
