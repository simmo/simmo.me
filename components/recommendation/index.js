import React, { PropTypes } from 'react'
import widowRemover from '../../javascript/utils/widow-remover'

const Recommendation = ({ author, photo, quote, role }) =>
    <article className="recommendation">
        <header className="recommendation__header">
            <img src={`/images/people/${photo}`} alt={author} className="recommendation__photo" width="120" height="120" />
            <h2 className="recommendation__author"><span className="recommendation__name">{author}</span> <span className="recommendation__role">{role}</span></h2>
        </header>
        <p className="recommendation__body" dangerouslySetInnerHTML={{ __html: widowRemover(quote)}} />
    </article>

Recommendation.propTypes = {
    author: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}

export default Recommendation
