import React, { Component } from 'react'
import moment from 'moment';

export default class Employer extends Component {
    render() {
        var employer = this.props

        let startDate = moment(employer.startDate)
        let endDate = employer.endDate? moment(employer.endDate) : null

        return (
            <article className="employer">
                <header className="employer__primary">
                    <img src={'/images/employers/' + employer.logo + '.svg'} className="employer__logo" alt={employer.name} />
                	<h2 className="employer__name">{employer.name}</h2>
                    <p className="employer__when">
                        {startDate.format('MMM YY')} - {endDate? endDate.format('MMM YY') : 'Present'}
                        <span className="employer__duration">{endDate? startDate.from(endDate, true) : startDate.fromNow(true)}</span>
                    </p>
                </header>
                <div className="employer__secondary">
                	<p className="employer__position">{employer.position}</p>
                	<ul className="employer__achievements">{employer.achievements.map((achievement, index) => <li key={index} className="employer__achievement">{achievement}</li>)}</ul>
                </div>
            </article>
        )
    }
}
