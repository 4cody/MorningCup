import React from 'react'
import PropTypes from 'prop-types'

function Article({author, outlet, title, img, content, desc}) {

    return (
        <div className="article">
            <div className="img">
                {img ? <img src={img} alt="" data-test="testText"/> : 'no image'}   
            </div>
            <h6>{outlet}</h6>
            <h3>{title}</h3>
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
    outlet: PropTypes.string,
}

export default Article

