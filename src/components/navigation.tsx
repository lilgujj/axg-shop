import { Link } from "react-router-dom";
import {  CloseOutlined  } from '@ant-design/icons';
import { MouseEventHandler } from "react";
interface Props {
toggleNavbar: boolean,
menuToggle: MouseEventHandler,
}

const Navigation = (props: Props) => {
  return (
    <ul id="ul" className={props.toggleNavbar ? "toggle" : ""}>
      <li>
        <Link onClick={props.menuToggle} className="linkStyle links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={props.menuToggle} className="linkStyle links" to="/shop">
          Shop
        </Link>
      </li>
      <li>
        <Link onClick={props.menuToggle} className="linkStyle links" to="/about">
          About
        </Link>
      </li>
      <div className="close">
        <CloseOutlined onClick={props.menuToggle} style={{ fontSize: "2rem" }} />
      </div>
    </ul>
  );
};

export default Navigation;
