import React from 'react'
import PropTypes from 'prop-types'

import Articles from './Articles'
import NewsSourceNav from './NewsSourceNav'

function ArticleDashboard(props) {
    return (
        <div>
            <NewsSourceNav />
            <Articles />
        </div>
    )
}

ArticleDashboard.propTypes = {

}

export default ArticleDashboard

  