import React from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'

import Weather from './Weather'
// import MainNav from './MainNav'

import '../../sass/App.sass'

function Head(props) {

    const [wData, setWeather] = React.useState({})

    React.useEffect(() => {
        (async () => {
            const res = await axios.get('/api/weather')
            setWeather(res.data.wRes[0])
        })() 
    },[])

    return (
        <div className='main-head'>
            <Weather temp={wData.temp} loc={wData.city_name} sky={wData.weather}/>

            <div className='market-display'>

            </div>

            {/* <MainNav /> */}
        </div>
    )
}

// Head.propTypes = {

// }

export default Head

