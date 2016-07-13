import React from 'react'

const Social = () =>
    <nav className="social">
        <ul className="social__list">
            <li className="social__item"><a href="http://instagram.com/mikesimmonds" className="social__link social__link--instagram" target="_blank">Instagram</a></li>
            <li className="social__item"><a href="http://github.com/simmo" className="social__link social__link--github" target="_blank">GitHub</a></li>
            <li className="social__item"><a href="http://twitter.com/mikesimmonds" className="social__link social__link--twitter" target="_blank">Twitter</a></li>
            <li className="social__item"><a href="http://stackoverflow.com/users/547345/mike" className="social__link social__link--stackoverflow" target="_blank">Stackoverflow</a></li>
            <li className="social__item"><a href="http://lnkd.in/2T4KbK" className="social__link social__link--linkedin" target="_blank">LinkedIn</a></li>
            <li className="social__item"><a href="mailto:mike@simmo.me" className="social__link social__link--email">Email</a></li>
        </ul>
    </nav>

export default Social
