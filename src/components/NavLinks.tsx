import "../CSS/style.css";
const NavLinks = () => {
  return (
    <ul className="flex nav-bar-items">
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
          Project
        </a>
      </li>
      <li>
        <a className="nav-bar-links uppercase btn ff-fraunces" href="">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
