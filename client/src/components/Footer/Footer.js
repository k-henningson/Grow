import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>
            <Link className="link" to="/products/1">
              Cosmos
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/6">
              Foliage & Fillers
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/5">
              Grasses & Pods
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/4">
              Poppies
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/2">
              Sweet Peas
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/3">
              Zinnias
            </Link>
          </span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Shipping</span>
          <span>Delivery</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            <a href="https://github.com/k-henningson/Grow">GROW</a> 🌱 🌸 🌻 is an e-commerce application that sells flower seeds,
            focusing on varieties that are rare, atypical, and passed down
            through generations.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Hi I'm{" "}
            <a href="https://www.linkedin.com/in/kyra-henningson-878488230/">
              Kyra
            </a>{" "}
            👋! Full stack software engineer, former dental hygienist. Vancouver
            🇨🇦 based, open to opportunities.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">GROW 🌱</span>
          <span className="copywright">
            &nbsp;© Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment options" />
        </div>
      </div>
    </div>
  );
}
