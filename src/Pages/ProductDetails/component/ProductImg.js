import React from "react";

class ProductImg extends React.Component {
  render() {
    const { productData } = this.props;
    return (
      <>
        {productData.map((el, i) => {
          return (
            <li key={i} className={i % 2 === 0 ? "" : "reverse"}>
              <div className="productImg">
                <img
                  src={`https://assets.logitech.com/assets/65685/${el.image}/logitech-pebble-m350.jpg`}
                  alt="제품이미지"
                />
              </div>
              <div className="productText">
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default ProductImg;
