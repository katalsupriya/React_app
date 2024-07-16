import React, { Component } from 'react';

export default class TableHeader extends Component {
  render() {
    return (<>
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th scope="col">Remove Record</th>
        </tr>
      </thead>
      </>
    );
  }
}
