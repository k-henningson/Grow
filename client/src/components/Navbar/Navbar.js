import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Navbar.scss";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>CAD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Cosmos
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Poppies
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Sweet Peas
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            GROW 🌱
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/3">
              Zinnias
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/5">
              Grasses & Pods
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/6">
              Foliage & Fillers
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}
