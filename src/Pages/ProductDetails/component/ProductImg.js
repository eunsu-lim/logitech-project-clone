import React from "react";
import Slider from "react-slick";

class ProductImg extends React.Component {
  render() {
    const { productData } = this.props;
    const slideList = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
    };
    return (
      <>
        {productData.map((el, i) => {
          return (
            <li
              key={i}
              className={i % 2 === 0 ? "productData" : "productData reverse"}
            >
              <div className="productImg">
                {el.image.length >= 2 ? (
                  <Slider {...slideList}>
                    {el.image.map((img, i) => {
                      return (
                        <div className="slide" key={i}>
                          <img src={img} alt="제품이미지" />
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  <img src={el.image} alt="제품이미지" />
                )}
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
