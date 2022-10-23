import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : undefined)}>
                        Home
                    </NavLink>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="mx-2">
                            <NavLink to="/add" className={({ isActive }) => (isActive ? "link-active" : undefined)}>
                                Add Techno
                            </NavLink>
                        </li>
                        <li className="mx-2">
                            <NavLink to="/all" className={({ isActive }) => (isActive ? "link-active" : undefined)}>
                                All Techno
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Menu;