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
const DaysOfTheWeekInput = ({ value, showChars, onChange, inputStyle, dayStyle, days, activeDayStyle, inactiveDayStyle, forcedState }) => {
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
    
    const isDayActive   = index => isString ? daysOfWeek[index] === '1' : daysOfWeek[index] === 1
    const isStateForced = index => forcedState[index] !== 'none'

    const applyForcedStates = (v) => {
        return Object.keys(forcedState).map(index => {
            switch(forcedState[index]){
                case 'none':
                    return v[index]
                case 'active':
                    return isString ? '1' : 1
                case 'inactive':
                    return isString ? '0' : 0
                default:
                    return v[index]
            }
        })
    }

    const validateValue = (v) => {
        console.log(v)
        let newValue = applyForcedStates(v)
        
        let toCompare = isString ? newValue.join('') : v
        
        if(toCompare !== v){
            onChange(isString ? applyForcedStates(newValue.slice(0, 7)).join('') : applyForcedStates(newValue.slice(0, 7)))
        }

        return newValue.slice(0, 7)
    }

    const [daysOfWeek, setDaysOfWeek] = useState(validateValue(value))

    const selectDay = (e, index) => {
        e.preventDefault()
        let newDaysOfWeek = daysOfWeek
        if(isString){
            newDaysOfWeek[index] = newDaysOfWeek[index] === '0' ? '1' : '0'
            onChange(applyForcedStates(newDaysOfWeek).join(''))
        } else {
            newDaysOfWeek[index] = newDaysOfWeek[index] === 0 ? 1 : 0
            onChange(applyForcedStates(newDaysOfWeek))
        }
        setDaysOfWeek(applyForcedStates([...newDaysOfWeek]))
    }

    return (
        <div>
            <span className='day-of-week-input' style={styles.input}>
                {
                    daysOfWeek.map((day, index) => {
                        let dayStyle = isDayActive(index) ? {...styles.day, ...styles.active} :  {...styles.day, ...styles.inactive}
                        let className = 'day-of-week-selector'

                        className += isDayActive(index) ? ' selected' : ''
                        className += isStateForced(index) ? ' disabled' : ' clickable'

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
    activeDayStyle: PropTypes.object,
    inactiveDayStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    dayStyle: PropTypes.object,
    forcedState: PropTypes.object
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
    forcedState: {
        0: 'none',
        1: 'none',
        2: 'none',
        3: 'none',
        4: 'none',
        5: 'none',
        6: 'none'
    },
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
