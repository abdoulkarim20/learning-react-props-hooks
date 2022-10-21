import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add" className={({ isActive }) => (isActive ? "active-link" : undefined)}>
                        Add Techno
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/all" className={({ isActive }) => (isActive ? "active-link" : undefined)}>
                        All Techno
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Menu;