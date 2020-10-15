import React from 'react'
import PropTypes from 'prop-types'

function Article({author, title, img, content, desc}) {
    return (
        <div className="article">
            <h3>{title}</h3>
            <img src={img} alt=""/>
            <p>{desc}</p>
        </div>
    )
}

Article.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    content: PropTypes.string,
    desc: PropTypes.string,
}

export default Article

