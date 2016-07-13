import React, { Component, PropTypes } from 'react'
import Project              from './project'
import Header               from './header'
import Section              from './section'
import Slider               from './slider'
import Recommendation       from './recommendation'
import Footer               from './footer'
import Employer             from './employer'
import Clients              from './clients'
import moment               from 'moment'

moment.updateLocale('en', {
    relativeTime : {
        future: 'in %s',
        past:   '%s ago',
        s:  'seconds',
        m:  'a minute',
        mm: '%d minutes',
        h:  'an hour',
        hh: '%d hours',
        d:  '1 day',
        dd: '%d days',
        M:  '1 month',
        MM: '%d months',
        y:  '1 year',
        yy: '%d years'
    }
})

class App extends Component {
    componentDidMount() {
        document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, 'js')
    }

    render() {
        var projects = this.props.projects.map((project, index) => <Project key={index} {...project} />)
        var recommendations = this.props.recommendations.map((recommendation, index) => <Recommendation key={index} {...recommendation} />)
        var employers = this.props.employers.map((employer, index) => <Employer key={index} {...employer} />)

        return (
            <div className="wrap">
                <Header />
                <div className="app__body">
                    <Section name="Work" className="work">
                        {projects}
                    </Section>
                    <Section name="Recommendations" className="quotes">
                        <Slider>
                            {recommendations}
                        </Slider>
                    </Section>
                    <Section name="Clients" className="clients">
                        <Clients items={this.props.clients} />
                    </Section>
                    <Section name="Employment" className="employment">
                        {employers}
                    </Section>
                    <Footer />
                </div>
           </div>
        )
    }
}

App.propTypes = {
    projects: PropTypes.array.isRequired,
    recommendations: PropTypes.array.isRequired,
    employers: PropTypes.array.isRequired,
    clients: PropTypes.array.isRequired
}

export default App
