import React, { Component } from 'react'
import classes from 'classnames'

export default class Section extends Component {
    render() {
        return (
            <section className={classes('section', 'section--' + this.props.className,  { 'section--contained': !!this.props.contained })}>
            	<header className="section__header">
            		<h1 className="section__name">{this.props.name}</h1>
            	</header>
                <div className="section__content">
                	{this.props.children}
                </div>
            </section>
        )
    }
}
