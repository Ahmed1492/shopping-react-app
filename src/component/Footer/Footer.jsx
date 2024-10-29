import React from "react";
import "./footer.scss";
import payment from "../../img/payment.png";
export const Footer = ({ footerRef }) => {
  return (
    <div ref={footerRef} className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="item">
            <h3>Category</h3>
            <p>Women</p>
            <p>men</p>
            <p>shoes</p>
            <p>Accessory</p>
          </div>
          <div className="item">
            <h3>Links</h3>
            <p>FAQ</p>
            <p>Pages</p>
            <p>store</p>
            <p>Compare</p>
          </div>
          <div className="item itemp">
            <h3>About</h3>
            <p className="textItem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quo exercitationem fugit laborum sed cumque quod
              repellat nobis similique voluptate nihil non, labore quasi .
            </p>
          </div>
          <div className="item itemp">
            <h3>Contact</h3>
            <p className="textItem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quo exercitationem fugit laborum sed cumque quod
              repellat nobis similique voluptate nihil non, labore quasi{" "}
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="item">
              <h2>Lamastore</h2>
              <p>Copyright symbol: ©</p>
            </div>
          </div>
          <div className="right">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
