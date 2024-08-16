import "./pricecart.css";
import image1 from "../assets/image-baklava-desktop.jpg";
import image2 from "../assets/image-baklava-mobile.jpg";
import image3 from "../assets/image-baklava-tablet.jpg";
import image4 from "../assets/image-baklava-thumbnail.jpg";

const PriceCart = () => {
  return (
    <div className="box">
      {/* <h1 className="h1">hello world!</h1> */}
      <img src={image1} alt="" className="desktop" />
      <img src={image2} alt="" className="tablet" />
      <img src={image3} alt="" className="mobile" />
      <img src={image4} className="preview" />
    </div>
  );
};

export default PriceCart;
