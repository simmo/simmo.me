import React, { Component } from 'react'
import Social               from '../social'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Social />
                <p className="footer__copyright">&copy; Mike Simmonds 2015</p>
            </footer>
        )
    }
}
