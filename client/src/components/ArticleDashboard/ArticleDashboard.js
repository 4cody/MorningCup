import React from 'react'
// import PropTypes from 'prop-types'

import axios from 'axios'

import Articles from './Articles'
import NewsSourceNav from './NewsSourceNav'

function ArticleDashboard(props) {

    const [articles, setArticles] = React.useState([])

    React.useEffect(() => {
        const callArticles = async () => {
            const res = await axios.get('/api/test')

            setArticles(res.data.articles)
        }
        callArticles()
    },[])

        
    // const Article = () => {

    // }

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

  