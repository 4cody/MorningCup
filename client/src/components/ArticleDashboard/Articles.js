import React from 'react'
import PropTypes from 'prop-types'

import Article from './Article'

import '../../sass/App.sass'

function Articles({data}) {

    const articleMapper = () => (
        data.map(item => (
            <Article 
                author={item.author} 
                title={item.title} 
                img={item.urlToImage} 
                content={item.content} 
                desc={item.description}/>
        ))
    )

    return (
        <div className='article-container'>
            
            {articleMapper()}

        </div>
    )
}

Articles.propTypes = {
    data: PropTypes.array,
}

export default Articles

