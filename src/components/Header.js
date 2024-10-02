const Header = ()=>{
    return (
    <div className="app-header">
        <div className="app-header-left">
            <div className="web-dev-icon">
                <div className="web-dev-icon-header">
                </div>
                <div className="web-dev-icon-body"> &lt; / &gt; </div>
            </div>
            &nbsp; <b className="hero-text">Hajimalung Baba</b> &nbsp; - UI Engineer
        </div>
        <div className="app-header-right">
            <ul className="navbar">
                <li className="nav-item">Resume</li>
                <li className="nav-item">Project</li>
                <li className="nav-item">Contact</li>
            </ul>
        </div>
    </div>);
}

export default Header;