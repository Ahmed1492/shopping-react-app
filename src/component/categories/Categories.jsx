import { Link } from "react-router-dom";
import "./Categories.scss";
const data = [
  {
    img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600", //1

    img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600", //2

    img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600", //3

    img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600", //4

    img: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600", //5

    img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600", //6
  },
];
export const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/sale">sale</Link>
          </div>

          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/woman">WOMEN</Link>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/newSesson">NEW SESSON</Link>
          </div>
        </div>

        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />

                <Link to="/products/men">MEN</Link>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <Link to="/products/accessories">ACCESSORIES</Link>
              </div>
            </div>
          </div>

          <div className="row">
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/shoses">SHOSES</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
