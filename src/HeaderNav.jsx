import icon from "./images/icon.png";
import "./headerNav.css";

function HeaderNav() {
  return (
    <nav className="nav-bar">
      <ul className="list">
        <li>Gmail</li>
        <li>Images</li>
      </ul>
      <img src={icon} alt="google-icon" className="image" />
      <div className="profile">
        <p>c</p>
      </div>
    </nav>
  );
}

export default HeaderNav;
