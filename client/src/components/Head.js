import React from 'react'
import PropTypes from 'prop-types'

function Head(props) {
    return (
        <div>
            <div className='weather-display'>
                77 Partly Cloudy
            </div>

            <div className='market-display'>

            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Daily</li>
                    <li>Other</li>
                </ul>
            </nav>
        </div>
    )
}

Head.propTypes = {

}

export default Head

