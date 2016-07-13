import React, { Component } from 'react'
import moment from 'moment'

export default class Employer extends Component {

    render() {
        var employer = this.props

        let startMoment = moment(employer.startDate)
        let endMoment = employer.endDate ? moment(employer.endDate) : moment()

        let years = endMoment.diff(startMoment, 'years')
        endMoment.subtract(years, 'years')
        let months = endMoment.diff(startMoment, 'months')
        let duration = []
        if (years) {
            duration.push(years + ' year' + (years === 1 ? '' : 's'))
        }
        if (months) {
            duration.push(months + ' month' + (months === 1 ? '' : 's'))
        }

        return (
            <article className="employer">
                <header className="employer__primary">
                    <img src={'/images/employers/' + employer.logo + '.svg'} className="employer__logo" alt={employer.name} />
                    <h2 className="employer__name">{employer.name}</h2>
                    <p className="employer__when">
                        {startMoment.format('MMM YY')} - {employer.endDate ? endMoment.format('MMM YY') : 'Present'}
                        <span className="employer__duration">{duration.join(', ')}</span>
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
