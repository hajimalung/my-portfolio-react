import linkedinLogo from "url:../assets/icons/LinkedIn.svg";
import gitHubProfileLogoLink from "url:../assets/icons/GitHub.svg"

const Footer=()=>{
    
    const linkedInUrl = new URL(`${linkedinLogo}?width=640&quality=75`, import.meta.url);
    const githubLogoUrl = new URL(`${gitHubProfileLogoLink}?width=640&quality=75`, import.meta.url);

    return (
    <div className="app-footer">
        <div className="footer-card">
            <h3>Phone</h3>
            <p> +91 8500033154</p>
        </div>
        <div className="footer-card">
            <h3>Email</h3>
            <p> hajimalungbaba.786@gmail.com</p>
        </div>
        <div className="footer-card">
            <h3>Follow me</h3>
            <div> <img className="footer-social-link" src={linkedInUrl}></img> <img className="footer-social-link" src={githubLogoUrl}></img> </div>
        </div>
    </div>);
}

export default Footer;