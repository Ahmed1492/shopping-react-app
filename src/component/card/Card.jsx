import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <Link to="product/cat/1">
        <div className="card">
          <div className="images">
            <img className="imag1" src={data.img1} alt="storeImage" />
            <img className="imag2" src={data.img2} alt="storeImage" />
          </div>
        </div>
      </Link>
      <div className="texts">
        <h3> {data.title}</h3>

        <div className="price">
          <del>$232.2</del>
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
};
