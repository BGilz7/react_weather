import React, { Component } from 'react';
import './index.css';


class ProductsTable extends Component {
  render() {
    return (
        <table id="products" className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Add Product</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products &&
                this.props.products.map( item =>
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-success" onClick={() => this.props.addItem(item.id)}>Add</button>
                    </td>
                  </tr>
                )
              }
          </tbody>
        </table>
    );
  }
}

export default ProductsTable;
