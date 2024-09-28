import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './Space.scss'

const Space = (props) => {
    const {isEndPoint, isStartPoint, y, x} = props

    return (
        <div
            data-y={y}
            data-x={x}
            className={cn('space', {"_end":isEndPoint}, {"_start": isStartPoint} )}
        >
            {isStartPoint && 'Start'}
            {isEndPoint && 'End'}
        </div>

    )
}
Space.propTypes = {
    isEndPoint: PropTypes.bool,
    isStartPoint: PropTypes.bool,
    y: PropTypes.number,
    x: PropTypes.number
}
export default Space