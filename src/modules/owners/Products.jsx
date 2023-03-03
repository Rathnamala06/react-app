import { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "./action";

class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  onDelete(id) {
    this.props.deleteProduct(id)
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        {this.props?.products.map((product, index) => {
          return (
            <li key={index}>
              {product.title} - {product.id}
              <button onClick={() => this.onDelete(product.id)}>Delete</button>
            </li>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.ownersReducer.products,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  deleteProduct
})(Products);