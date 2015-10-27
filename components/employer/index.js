import React, { Component } from 'react'

export default class Employer extends Component {
    render() {
        let employer = this.props

        return (
            <article className="employer">
                <header className="employer__primary">
                	<h2 className="employer__name">{employer.name}</h2>
                    <p className="employer__when">
                        {employer.startDate.format('MMM YY')} - {employer.endDate? employer.endDate.format('MMM YY') : 'Present'}
                        <span className="employer__duration">{employer.endDate? employer.startDate.from(employer.endDate, true) : employer.startDate.fromNow(true)}</span>
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
