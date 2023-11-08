import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";

const NavLinkMobile = () => {
  const [showItems, setShwoItem] = useState(false);
  return (
    <>
      <AiOutlineBars
        size={25}
        onClick={() => setShwoItem(showItems ? false : true)}
      ></AiOutlineBars>
      {showItems && (
        <div className="mobile-nav-container">
          <ul className="nav-bar-items mobile-nav-bar flex">
            <li>
              <a className="nav-bar-links" href="">
                About
              </a>
            </li>
            <li>
              <a className="nav-bar-links" href="">
                Services
              </a>
            </li>
            <li>
              <a className="nav-bar-links" href="">
                Projects
              </a>
            </li>
            <li className="mobile-btn">
              <a className="btn uppercase ff-fraunces" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavLinkMobile;
