import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'
import data from '../data'

ReactDOM.render(<App {...data} />, document.getElementById('mount'))
