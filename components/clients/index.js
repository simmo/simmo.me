import React, { PropTypes } from 'react'

const Clients = ({ items }) =>
    <ul className="clients">{items.map((client, index) =>
        <li key={index} className="clients__item"><img src={'/images/clients/' + client.logo + '.svg'} alt={client.name} className="clients__image" /></li>
    )}</ul>

Clients.propTypes = {
    items: PropTypes.array.isRequired
}

export default Clients
