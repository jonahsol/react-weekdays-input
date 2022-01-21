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
const DaysOfTheWeekInput = ({ value, showChars, onChange, inputStyle, dayStyle, days, activeDayStyle, inactiveDayStyle }) => {
    const isString = typeof value === typeof ""

    const styles = {
        input: {
            display: "inline-flex",
        },
        day: {
            border: "1px grey solid",
            padding: "5px",
        },
        inactive: {
            ...inactiveDayStyle
        },
        active: {
            ...activeDayStyle
        }
    }

    if(inputStyle !== null){
        styles.input = {...inputStyle, display: 'inline-flex'}
    }
    if(dayStyle !== null)
        styles.day = dayStyle

    const validateValue = (v) => {
        if(!isString) 
            return v.slice(0, 7)
        return v.slice(0, 7).split('')
    }

    const [daysOfWeek, setDaysOfWeek] = useState(validateValue(value))

    const selectDay = (e, index) => {
        e.preventDefault()
        let newDaysOfWeek = daysOfWeek
        if(isString){
            newDaysOfWeek[index] = newDaysOfWeek[index] === '0' ? '1' : '0'
            onChange(newDaysOfWeek.join(''))
        } else {
            newDaysOfWeek[index] = newDaysOfWeek[index] === 0 ? 1 : 0
            onChange(newDaysOfWeek)
        }
        setDaysOfWeek([...newDaysOfWeek])
    }

    const isDayActive = index => {
        if(!isString && daysOfWeek[index] === 1)
            console.log(index, daysOfWeek[index],'dAY ACTIVE', daysOfWeek)
        return isString ? daysOfWeek[index] === '1' : daysOfWeek[index] === 1
    }

    return (
        <div>
            <span className='day-of-week-input' style={styles.input}>
                {
                    daysOfWeek.map((day, index) => {
                        let dayStyle = isDayActive(index) ? {...styles.day, ...styles.active} :  {...styles.day, ...styles.inactive}
                        let className = 'day-of-week-selector clickable'

                        className += isDayActive(index) ? ' selected' : ''

                        return (
                            <div 
                                key={index}
                                style={dayStyle} 
                                className={className}
                                onClick={(e) => selectDay(e, index)}
                            >
                                    {days[index].slice(0, showChars)}
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
    showChars: PropTypes.number,
    onChange: PropTypes.func,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    inputStyle: PropTypes.object,
    dayStyle: PropTypes.object,
}

DaysOfTheWeekInput.defaultProps = {
    value: '0000000',
    showChars: 2,
    onChange: function(v){},
    days: [
        'monday', 
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
    ],
    activeDayStyle: {
        backgroundColor: 'skyblue'
    },
    inactiveDayStyle: {
        backgroundColor: 'transparent'
    },
    inputStyle: null,
    dayStyle: null
}

export default DaysOfTheWeekInput
