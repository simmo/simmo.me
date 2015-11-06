import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'

const initialData = window.__initialData

ReactDOM.render(<App {...initialData} />, document.getElementById('mount'))
