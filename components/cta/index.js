import React, { Component } from 'react'

export default class Cta extends Component {
    render() {
        const { url, text } = this.props

        return url ? <a href={url} className="cta" target="_blank">View {text}</a> : <span className="cta cta--disabled">Preview unavailable</span>
    }
}
