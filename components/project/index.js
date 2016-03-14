import React, { Component } from 'react'
import Browser from '../browser'
import throttle from '../../javascript/utils/throttle'
import widowRemover from '../../javascript/utils/widow-remover'
import Cta from '../cta'

export default class Project extends Component {
    _removeScrollListener = () => window.removeEventListener('scroll', this.scrollListener)

    componentDidMount() {
        this.scrollListener = throttle((event) => {
            let halfViewport = window.innerHeight * 0.6
            let { top: elementTop } = this.wrapper.getBoundingClientRect()

            // Remove scroll listener if offset beyond half of viewport
            if (elementTop - halfViewport <= 0) {
                this._removeScrollListener()
                this.wrapper.classList.add('project--revealed')
            }
        })

        window.addEventListener('scroll', this.scrollListener)

        this.scrollListener()
    }

    componentWillUnmount() {
        this._removeScrollListener()
    }

    render() {
        const project = this.props
        const cta = {
            url: project.url,
            text: project.cta? project.cta : project.name
        }

        return (
            <article className="project" ref={(el) => this.wrapper = el}>
                <header className="project__primary">
                    <h1 className="project__name">{project.name}</h1>
                    <h2 className="project__agency">{project.employer}</h2>
                    <p className="project__description">{widowRemover(project.description)}</p>
                    <p className="project__cta"><Cta {...cta} /></p>
                </header>
                <div className="project__secondary">
                    <Browser {...project.image} alt={project.name} />
                </div>
            </article>
        )
    }
}
