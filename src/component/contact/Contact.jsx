import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="left">
          <p>Be In Touch With Us</p>
        </div>
        <div className="center">
          <input placeholder="Enter Your Email" type="text" />
          <button>JOIN US</button>
        </div>
        <div className="right">
          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
            <LinkedInIcon />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
