import React, { Component } from 'react';
import "../../ProductList/ProductList.scss"

class List extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Data/productListInfo.json", {
            method: "GET"
        })
            .then(response => response.json())
            .then(result => {
                this.setState({
                    products: result.productListInfo
                })
            });
    }

    handleMouseOver = () => {
        console.log("asdf")
    }

    render() {
        return (
            <ul>
                {this.state.products.map((product, index) => {
                    return (
                        <li className="List" key={index}>
                            <div className="productContainer"
                                onMouseOver={this.handleMouseOver}>
                                <div className="productImage">
                                    <div className="check" >
                                        <input type="checkbox" />
                                        <span>Compare</span>
                                    </div>
                                    <img alt={product.productName} src={`https://www.logitech.com/${product.imageUrl}`} />
                                </div>
                                <div className="productInfo1">
                                    <p>{product.productName}</p>
                                    <p>{product.productInfo}</p>
                                    <p>{product.productPrice}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul >
        );
    }
}

export default List;