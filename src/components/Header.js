import { Link } from "react-router-dom";

const Header = ()=>{
    return (
    <div className="app-header">
        <div className="app-header-left">
            <div className="web-dev-icon">
                <div className="web-dev-icon-header">
                </div>
                <div className="web-dev-icon-body"> &lt;&nbsp; / &gt; </div>
            </div>
            &nbsp; <Link to={"/"} className="hero-text">Hajimalung Baba</Link> &nbsp; UI Engineer
        </div>
        <div className="app-header-right">
            <ul className="navbar">
                <Link to={"/resume"} className="nav-item">Resume</Link>
                <Link to={"/projects"} className="nav-item">Projects</Link>
                <Link to={"/contact"} className="nav-item">Contact</Link>
            </ul>
        </div>
    </div>);
}

export default Header;