import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>JOIN THE GROW NEWSLETTER</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>GET UPDATES</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
}
