import React, { Component } from 'react';

export default class TableBody extends Component {
    render() {
        const rows = this.props.item.map((row) => {
            return (
                <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{row.username}</td>
                    <td>{row.website}</td>
                    <td>{row.address.city}</td>
                    <td><button className="btn btn-primary">Delete Record</button></td>
                </tr>
)
        });

        return <tbody>{rows}</tbody>

    };

}
