import { Link } from "react-router-dom";
import "./Categories.scss";

export default function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/Cosmos.webp"
            alt="Cosmos"
          />
          <button>
            <Link className="link" to="/products/1">
              Cosmos
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/Amaranth.webp"
            alt="Amaranth"
          />
          <button>
            <Link className="link" to="/products/6">
              Foliage & Fillers
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/Cress.webp"
            alt="Cress"
          />
          <button>
            <Link className="link" to="/products/5">
              Grasses & Pods
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/ShirleyPoppy.webp"
                alt="Poppy"
              />
              <button>
                <Link className="link" to="/products/4">
                  Poppies
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/SweetPea.webp"
                alt="Sweet Peas"
              />
              <button>
                <Link className="link" to="/products/2">
                  Sweet Peas
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://raw.githubusercontent.com/k-henningson/Grow/main/client/src/docs/Zinnia.webp"
            alt="Zinnias"
          />
          <button>
            <Link className="link" to="/products/3">
              Zinnias
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
