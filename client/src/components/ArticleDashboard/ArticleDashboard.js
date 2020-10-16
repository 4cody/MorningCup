import React from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'

import Articles from './Articles'
import NewsSourceNav from './NewsSourceNav'

function ArticleDashboard(props) {

    const [articles, setNews] = React.useState([])

    React.useEffect(() => {
        (async () => {
            const res = await axios.get('/api/news')
            setNews(res.data.articles)
        })()    
    },[])


    return (
        <>
            <NewsSourceNav />
            <Articles data={articles}/>
        </>
    )
}

// ArticleDashboard.propTypes = {

// }

export default ArticleDashboard

  