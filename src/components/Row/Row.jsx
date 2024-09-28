import React from "react"
import PropTypes from 'prop-types'
import './Row.scss'

const Row = ({children}) => {

    return (
        <div className="row">{children}</div>
    )
}
Row.propTypes = {
    children: PropTypes.any
}
export default Row