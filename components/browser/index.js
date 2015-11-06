import React, { Component } from 'react'

export default class Browser extends Component {
    render() {
        let browser = this.props

        return (
            <figure className="browser">
                <div className="browser__content">
                    <img src={'/images/' + browser.url} alt={browser.alt} width={browser.width | 620} height={browser.height | 400} className="browser__image" />
                </div>
            </figure>
        )
    }
}
