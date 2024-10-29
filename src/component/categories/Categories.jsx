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
              src="https://img.freepik.com/premium-photo/portrait-brunette-woman-hat-glasses-holding-gray-handbag_880763-14276.jpg?ga=GA1.1.78769429.1729888761&semt=ais_hybrid"
              alt=""
            />
            <Link to="/products/sale">sale</Link>
          </div>

          <div className="row">
            <img
              className="image-filter"
              src="https://img.freepik.com/premium-photo/portrait-beautiful-woman-pink-background_118454-27987.jpg?ga=GA1.1.78769429.1729888761&semt=ais_hybrid"
              // src="https://img.freepik.com/free-photo/parisian-lady-beret-trench-sings-microphone-stylish-brunette-long-skirt-light-autumn-coat-posing-camera_197531-18693.jpg?ga=GA1.1.78769429.1729888761&semt=ais_siglip"
              alt=""
            />
            <Link to="/products/woman">WOMEN</Link>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <img
              className="image-filter"
              // src="https://img.freepik.com/premium-photo/business-man-sunglasses-fashion-studio-with-pride-gray-background-as-lawyer-male-person-serious-confidence-career-growth-opportunity-with-style-classy-elegant_590464-470932.jpg?ga=GA1.1.78769429.1729888761&semt=ais_siglip"
              src="https://img.freepik.com/premium-photo/beautiful-brutal-tanned-hipster-man-black-shirt-hat-glasses_149155-1787.jpg?ga=GA1.1.78769429.1729888761&semt=ais_siglip"
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
                  className="image-filter"
                  src="https://img.freepik.com/premium-photo/business-man-sunglasses-fashion-studio-with-pride-gray-background-as-lawyer-male-person-serious-confidence-career-growth-opportunity-with-style-classy-elegant_590464-470932.jpg?ga=GA1.1.78769429.1729888761&semt=ais_siglip"
                  alt=""
                />

                <Link to="/products/men">MEN</Link>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  className="image-filter"
                  src="https://img.freepik.com/free-photo/parisian-lady-beret-trench-sings-microphone-stylish-brunette-long-skirt-light-autumn-coat-posing-camera_197531-18693.jpg?ga=GA1.1.78769429.1729888761&semt=ais_siglip"
                  alt=""
                />
                <Link to="/products/accessories">ACCESSORIES</Link>
              </div>
            </div>
          </div>

          <div className="row">
            <img
              className="image-filter"
              src="https://img.freepik.com/premium-photo/young-woman-warm-sweater-with-stylish-bag-color-surface_392895-11052.jpg?ga=GA1.1.78769429.1729888761&semt=ais_siglip"
              alt=""
            />
            <Link to="/products/bags">BAGS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
