import React, { Component } from 'react';
import List from '../ProductList/List/List'
import "../ProductList/ProductList.scss"

class ProductList extends Component {

    render() {
        return (
            <div className="productList">
                <div className="category">
                    <div className="categoryData">
                        <span>Mice + Keyboards / Mice</span>
                        <h1>MICE</h1>
                        <h6>Logitech Mice</h6>
                    </div>
                    <div className="mouseImage">
                        <img alt="mouse" src="https://www.logitech.com/assets/64464/mice.png" />
                    </div>
                </div>
                <div className="filterSorter">
                    <button>
                        <img src="https://www.logitech.com/images/icons/filter-toggle.svg" />
                        <span>HIDE FILTER</span>
                    </button>
                    <button>
                        <img src="https://www.logitech.com/images/icons/down-arrow.svg" />
                        <span>SORTY BY: NEWEST</span>
                    </button>
                </div>
                <div className="pfc">
                    <div className="productFilterContainer">
                        <div className="filterSidebar">
                            <div className="collection">
                                <span>COLLECTION</span>
                            </div>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        MX Performance
                                    </label>
                                </li>
                            </ul>

                            <div className="connectivity">
                                <span>CONNECTIVITY</span>
                            </div>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                    USB Receiver
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Multi-Device
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Wireless
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        For Business
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        For Education
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Gaming Mice
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="container">
                            <List />
                        </div>


                        {/* 
                        <div className="container">
                            <div className="productContainer">
                                <div className="productImage" >
                                    <img alt="product" src="https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3-mac/gallery/glamour-lg.png" />
                                </div>
                                <div className="productInfo">
                                    <p>name</p>
                                    <p>dscripton</p>
                                    <p>price</p>
                                </div>
                            </div>
                            <div className="productContainer">
                                <div className="productImage" >
                                    <img alt="product" src="https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3-mac/gallery/glamour-lg.png" />
                                </div>
                                <div className="productInfo">
                                    <p>name</p>
                                    <p>dscripton</p>
                                    <p>price</p>
                                </div>
                            </div>

                            <div className="productContainer">
                                <div className="productImage" >
                                    <img alt="product" src="https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3-mac/gallery/glamour-lg.png" />
                                </div>
                                <div className="productInfo">
                                    <p>name</p>
                                    <p>dscripton</p>
                                    <p>price</p>
                                </div>
                            </div>

                            <div className="productContainer">
                                <div className="productImage" >
                                    <img alt="product" src="https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3-mac/gallery/glamour-lg.png" />
                                </div>
                                <div className="productInfo">
                                    <p>name</p>
                                    <p>dscripton</p>
                                    <p>price</p>
                                </div>
                            </div>

                            <div className="productContainer">
                                <div className="productImage" >
                                    <img alt="product" src="https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3-mac/gallery/glamour-lg.png" />
                                </div>
                                <div className="productInfo">
                                    <p>name</p>
                                    <p>dscripton</p>
                                    <p>price</p>
                                </div>
                            </div>

                            <div className="productContainer">
                                <div className="productImage" >
                                    <img alt="product" src="https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3-mac/gallery/glamour-lg.png" />
                                </div>
                                <div className="productInfo">
                                    <p>name</p>
                                    <p>dscripton</p>
                                    <p>price</p>
                                </div>
                            </div>


                        </div> */}
                    </div >
                </div>
            </div >
        );
    }
}

export default ProductList;