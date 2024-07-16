import React, { Component } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';


export default class Table extends Component {
    render() {
        const {item} = this.props
        return (<>
            <table className="table">
                <TableHeader />
                <TableBody item={item}/>
            </table>
        </>)
    }
}


