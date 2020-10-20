import React from 'react'
import PropTypes from 'prop-types'

import Article from './Article'

import '../../sass/App.sass'

function Articles({data}) {
    return (
        <ul className='articles-container'>
            
            {data.map(item => (
                <li key={item.publishedAt}>
                    <Article
                        outlet={item.source.name}
                        author={item.author} 
                        title={item.title} 
                        img={item.urlToImage} 
                        content={item.content} 
                        desc={item.description}/>
                </li>))
            }

        </ul>
    )
}

Articles.propTypes = {
    data: PropTypes.array,
}

export default Articles

