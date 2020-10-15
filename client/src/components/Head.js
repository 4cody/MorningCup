import React from 'react'
// import PropTypes from 'prop-types'

import '../sass/App.sass'

function Head(props) {
    return (
        <div className='main-head'>
            <div className='weather-display'>
                77 Partly Cloudy
            </div>

            <div className='market-display'>

            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Daily</li>
                    <li>Otheer</li>
                </ul>
            </nav>
        </div>
    )
}

// Head.propTypes = {

// }

export default Head

