import React, { PropTypes } from 'react'

const Browser = ({ alt, height, url, width }) =>
    <figure className="browser">
        <div className="browser__content">
            <img src={`/images/${url}`} alt={alt} width={width} height={height} className="browser__image" />
        </div>
    </figure>

Browser.propTypes = {
    alt: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
}

Browser.defaultProps = {
    height: 400,
    width: 620
}

export default Browser
