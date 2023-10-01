import { Link, useMatch } from "react-router-dom";
import "./styles.css";
function NavLinkWithActive({ to, children }) {
  const match = useMatch(to);
  return (
    <li className={match ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
const Sidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="logo">
        <Link to="/">
          <img src="/Fitness-Logo.png" alt="Fitness Logo" width="100px" />
        </Link>
      </div>
      <ul className="nav-links">
        <NavLinkWithActive to="/">Dashboard</NavLinkWithActive>
        <NavLinkWithActive to="/exercise">Exercise</NavLinkWithActive>
        <NavLinkWithActive to="/food">Food</NavLinkWithActive>
        <NavLinkWithActive to="/goal">Goal</NavLinkWithActive>
      </ul>
    </div>
  );
};
export default Sidebar;
