import React, { Component } from 'react'
import classes from 'classnames'
import throttle from '../../javascript/utils/throttle'
import smoothScrollTo from '../../javascript/utils/smooth-scroll-to'

export default class Header extends Component {
    _scrollToContent = () => smoothScrollTo(document.body, this.wrapper.clientHeight, 1000)

    componentDidMount() {
        var introMax = this.content.clientHeight

        window.addEventListener('scroll', throttle((event) => {
            let scrollTop = window.pageYOffset

            if (scrollTop > introMax) return

            this.content.style.opacity = 1 - (scrollTop / introMax)
            this.content.style.transform = 'translate3d(0, -' + ((scrollTop / introMax) * 100) + 'px, 0)'
        }))
    }

    render() {
        return (
            <header className="header" ref={(el) => this.wrapper = el} id="top">
                <div className="header__wrap" ref={(el) => this.content = el}>
                    <div className="header__content">
                        <h1 className="header__title"><span className="header__hidden">Mike </span>Simmo<span className="header__hidden">nds</span></h1>
                        <h2 className="header__subtitle">Senior Front-end Developer</h2>
                    </div>
                    <button className="header__cta" onClick={this._scrollToContent}>Next</button>
                </div>
            </header>
        )
    }
}
