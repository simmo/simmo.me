import React, { PropTypes } from 'react'

const Cta = ({ text, url }) =>
    url ? <a href={url} className="cta" target="_blank">View {text}</a> : <span className="cta cta--disabled">Preview unavailable</span>

Cta.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string
}

export default Cta
