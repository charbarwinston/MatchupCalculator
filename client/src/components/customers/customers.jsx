import React, { Component } from "react";


class Customers extends Component {

  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('fetched ', customers)));
  }


  render() {

    return (
      <React.Fragment>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => 
            <li key={customer.id}>{ customer.firstName }   { customer.lastName }</li>
            )}
        </ul>
      </React.Fragment>
    );
  }

}

export default Customers;
