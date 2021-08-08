import logo from './logo.svg'
import './App.css'
import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.quantity != 0 ?
      product.name :
      <div style={{ color: 'black' }}>
        {product.name}
      </div>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory;

    let productsCategoriesToDisplay = this.props.products;

    productsCategoriesToDisplay.sort(function (a, b) {
      var el1 = a.category.toUpperCase();
      var el2 = b.category.toUpperCase();
      return el1.localeCompare(el2);
    });

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && product.quantity == 0) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />

        );
        console.log(rows)

      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table style={{ width: '100%', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
    console.log(e.target.value)
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input id='search'
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <div>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          <div>
            Only show products in stock
          </div>

        </div>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,

    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div className='box' style={{ background: 'salmon', width: '30%', margin: '0 auto', textAlign: 'center' }}>
        <Search
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  { category: 'Sport', price: '$49.99', quantity: '5', name: 'Football' },
  { category: 'Sport', price: '$9.99', quantity: '160', name: 'Shorts' },
  { category: 'Electronics', price: '$99.99', quantity: '0', name: 'iPod Touch' },
  { category: 'Sport', price: '$29.99', quantity: '0', name: 'Basketball' },
  { category: 'Electronics', price: '$399.99', quantity: '33', name: 'iPhone 5' },
  { category: 'Shoes', price: '$1399.99', quantity: '0', name: 'Air Force 1' },
  { category: 'Food', price: '$0.99', quantity: '10', name: 'Pancakes' }
];

function App() {

  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}

export default App
