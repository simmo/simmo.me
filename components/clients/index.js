import React, { Component } from 'react'

export default class Clients extends Component {
    render() {
        var clients = this.props.items.map((client, index) => {
            return (
                <li key={index} className="clients__item">
                    <img src={'/images/clients/' + client.logo + '.svg'} alt={client.name} className="clients__image" />
                </li>
            )
        })

        return (
            <ul className="clients">
                {clients}
            </ul>
        )
    }
}
