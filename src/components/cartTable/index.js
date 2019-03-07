import React, { Component } from 'react';
import './index.css';


class CartTable extends Component {
  render() {
    return (
        <table id="cart" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Remove Product</th>
            </tr>
          </thead>
          <tbody>
          {
          this.props.cart &&
            this.props.cart.map( item =>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => this.props.removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            )
          }

          </tbody>
        </table>
    );
  }
}

export default CartTable;
