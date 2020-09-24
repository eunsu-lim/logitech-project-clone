import React, { Component } from "react";
import "./Cart.scss";

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="cartNav">
          <div>
            <h1>
              <img
                src="https://drh.img.digitalriver.com/DRHM/Storefront/Site/logib2c/cm/multimedia/Fusion/logos/logitech.svg"
                alt="logitech"
              />
            </h1>
          </div>
        </div>
        <section className="cartContainer">
          <div className="container">
            <h2>YOUR SHOPPING CART</h2>
            <p>
              Reference <span># 20294546510</span>
            </p>
            <div className="cartContent">
              <table>
                <tr>
                  <td>
                    <img
                      src="https://secure.logitech.com/assets/65685/18/logitech-pebble-m350.png"
                      alt="상품이미지"
                    />
                  </td>
                  <td>
                    <img
                      src="https://drh.img.digitalriver.com/DRHM/Storefront/Site/logib2c/cm/multimedia/Fusion/logos/logi_small.svg"
                      alt="상품로고이미지"
                    />
                  </td>
                  <td>Logitech Pebble M350 - Rose</td>
                  <td>In Stock</td>
                  <td>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </td>
                  <td>
                    <button>
                      <img
                        src="https://drh1.img.digitalriver.com/DRHM/Storefront/Site/logib2c/cm/buttons/Trash-icon.png"
                        alt="remove"
                      />
                    </button>
                  </td>
                  <td>$29.99</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://secure.logitech.com/assets/65685/18/logitech-pebble-m350.png"
                      alt="상품이미지"
                    />
                  </td>
                  <td>
                    <img
                      src="https://drh.img.digitalriver.com/DRHM/Storefront/Site/logib2c/cm/multimedia/Fusion/logos/logi_small.svg"
                      alt="상품로고이미지"
                    />
                  </td>
                  <td>Logitech Pebble M350 - Rose</td>
                  <td>In Stock</td>
                  <td>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </td>
                  <td>
                    <button>
                      <img
                        src="https://drh1.img.digitalriver.com/DRHM/Storefront/Site/logib2c/cm/buttons/Trash-icon.png"
                        alt="remove"
                      />
                    </button>
                  </td>
                  <td>$29.99</td>
                </tr>
              </table>
              <div className="totalCart">
                <span>Subtotal (tax not included) </span>
                <strong>$29.99</strong>
              </div>
              <div className="btnBox">
                <button className="btn1">Continue to Checkout</button>
                <button className="btn2"></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Cart;
