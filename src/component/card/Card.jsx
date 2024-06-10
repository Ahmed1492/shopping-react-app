import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Link to="product/1">
        <div className="card">
          <div className="images">
            <img
              className="imag1"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data.attributes.image.data.attributes.url
              }
              alt="storeImage"
            />
            <img
              className="imag2"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data.attributes.image2.data.attributes.url
              }
              alt="storeImage"
            />
          </div>
        </div>
      </Link>
      <div className="texts">
        <h3> {data.attributes.title}</h3>
        <span>{data.attributes.price}</span>
      </div>
    </div>
  );
};
