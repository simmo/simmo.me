import React, { Component } from 'react'
import classes from 'classnames'

export default class Slider extends Component {
    _goto = (index, event) => {
        if (index > this.props.children.length - 1) return

        let newState = this.state
        let diff = Math.abs(this.state.current - index)

        newState.current = index

        this.wrapper.style.transitionDuration = ((.5 * diff) - ((diff - 1) * .25)) + 's'
        this.wrapper.style.transform = 'translateX(-' + (index * (100 / this.props.children.length)) + '%)'

        this.setState(newState)
    }

    constructor() {
        super()

        this.state = {
            current: 0
        }
    }

    render() {
        let slides = this.props.children.map((slide, index) => <div key={index} className={classes('slider__item', { 'slider__item--active': this.state.current === index })}>{slide}</div>)
        let nav = this.props.children.map((slide, index) => <li key={index} className="slider__nav-item"><button className={classes('slider__button slider__position', { 'slider__position--active': this.state.current === index })} onClick={this._goto.bind(this, index)}>Goto recommendation {index + 1}</button></li>)
        let itemStyles = { width: (slides.length * 100) + '%' }

        return (
            <div className="slider">
                <div className="slider__wrap">
                    <div className="slider__items" ref={(el) => this.wrapper = el} style={itemStyles}>
                        {slides}
                    </div>
                </div>
                <nav className="slider__nav">
                    <button className="slider__button slider__button--dir" onClick={this._goto.bind(this, this.state.current - 1)} disabled={this.state.current === 0}>&lsaquo;<span className="slider__button-text"> Previous</span></button>
                    <ul className="slider__nav-items">
                        {nav}
                    </ul>
                    <button className="slider__button slider__button--dir" onClick={this._goto.bind(this, this.state.current + 1)} disabled={this.state.current === slides.length - 1}><span className="slider__button-text">Next </span>&rsaquo;</button>
                </nav>
            </div>
        )
    }
}
