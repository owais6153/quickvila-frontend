import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div id="sidebar">
      <ul>
        <li>
          <Link to="/my-account">My Account</Link>
        </li>
        <li>
          <Link to="/my-orders">My Orders</Link>
        </li>
        <li>
          <Link to="/update-password">Update Password</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
