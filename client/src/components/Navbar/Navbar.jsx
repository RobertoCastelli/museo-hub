import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Events</Link>
      </li>
      <li>
        <Link to="/feedback">Feedback</Link>
      </li>
    </ul>
  );
}

export default Navbar;
