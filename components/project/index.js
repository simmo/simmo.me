import React, { Component, PropTypes } from 'react'
import Browser from '../browser'
import throttle from '../../javascript/utils/throttle'
import widowRemover from '../../javascript/utils/widow-remover'
import Cta from '../cta'

class Project extends Component {
    _removeScrollListener() {
        window.removeEventListener('scroll', this.scrollListener)
    }

    _addScrollListener() {
        this.scrollListener = throttle(() => {
            let halfViewport = window.innerHeight * 0.6
            let { top: elementTop } = this.wrapper.getBoundingClientRect()

            // Remove scroll listener if offset beyond half of viewport
            if (elementTop - halfViewport <= 0) {
                this._removeScrollListener()
                this.wrapper.classList.add('project--revealed')
            }
        })

        window.addEventListener('scroll', this.scrollListener)
    }

    componentDidMount() {
        this._addScrollListener()
    }

    componentWillUnmount() {
        this._removeScrollListener()
    }

    render() {
        const { cta, description, employer, image, name, url } = this.props

        return (
            <article className="project" ref={(el) => this.wrapper = el}>
                <header className="project__primary">
                    <h1 className="project__name">{name}</h1>
                    <h2 className="project__agency">{employer}</h2>
                    <p className="project__description">{widowRemover(description)}</p>
                    <p className="project__cta"><Cta text={cta || name} url={url} /></p>
                </header>
                <div className="project__secondary">
                    <Browser {...image} alt={name} />
                </div>
            </article>
        )
    }
}

Project.propTypes = {
    cta: PropTypes.string,
    description: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string
}

export default Project
