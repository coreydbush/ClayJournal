import React, { Component } from 'react';

export class Logout extends Component {
  static displayName = Logout.name;

  constructor(props) {
    super(props);
    this.state = { pots: [], loading: true };
  }

  componentDidMount() {
    this.populatePotsData();
  }

  static renderPotsTable(pots) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {pots.pots.map(pot =>
            <tr key={pot.date}>
              <td>{pot.date}</td>
              <td>{pot.name}</td>
              <td>{pot.description}</td>
              <td>{pot.type}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Logout.renderPotsTable(this.state.pots);

    return (
      <div>
        <h1 id="tableLabel">Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async populatePotsData() {
        const response = await fetch('../DummyContent/pots.json');
        debugger;
    const data = await response.json();
    this.setState({ pots: data, loading: false });
  }
}
