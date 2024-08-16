import "./pricecart.css";
import image1 from "../assets/image-baklava-desktop.jpg";
import image2 from "../assets/image-baklava-mobile.jpg";
import image3 from "../assets/image-baklava-tablet.jpg";

const PriceCart = () => {
  return (
    <div className="box">
      <h1>hello world!</h1>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
    </div>
  );
};

export default PriceCart;
