import React, { Component } from 'react'
import widowRemover from '../../javascript/utils/widow-remover'

export default class Recommendation extends Component {
    render() {
        let recommendation = this.props

        return (
            <article className="recommendation">
                <header className="recommendation__header">
                    <img src={'/images/people/' + recommendation.photo} alt={recommendation.author} className="recommendation__photo" width="120" height="120" />
                    <h2 className="recommendation__author"><span className="recommendation__name">{recommendation.author}</span> <span className="recommendation__role">{recommendation.role}</span></h2>
                </header>
                <p className="recommendation__body" dangerouslySetInnerHTML={{ __html: widowRemover(recommendation.quote)}} />
            </article>
        )
    }
}
