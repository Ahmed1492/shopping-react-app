import { Link } from "react-router-dom";
import "./Card.scss";

function truncateString(str) {
  return str.length > 30 ? str.slice(0, 30) : str;
}
export const Card = ({ feturedData, type, index }) => {
  // console.log(data);
  return (
    <div>
      <Link to={`product/${type}/${index + 1}`}>
        <div className="card">
          <div className="images">
            <div key={feturedData.id} className="images">
              {feturedData.images.length > 1 ? (
                <>
                  <img className="img1" src={feturedData?.images[0]} alt="" />
                  <img className="img2" src={feturedData?.images[1]} alt="" />)
                </>
              ) : (
                <img className="img" src={feturedData?.images[0]} alt="" />
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="texts">
        <h3> {truncateString(feturedData.title)}</h3>

        <div className="price">
          <del>{feturedData.oldPrice}</del>
          <p>${feturedData.currentPrice}</p>
        </div>
      </div>
    </div>
  );
};
