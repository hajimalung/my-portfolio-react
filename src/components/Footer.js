import linkedinLogo from "url:../assets/icons/LinkedIn.svg";
import gitHubProfileLogoLink from "url:../assets/icons/GitHub.svg"
import firebaseLogo from "url:../assets/icons/Firebase.svg";
import { LINKEDIN_PROFILE_URL, GItHUB_PROFILE_URL, EMAIL_ID } from "../utils/constants";


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
            <a className="email-link-style" href={"mailto:"+EMAIL_ID}>{EMAIL_ID}</a>
        </div>
        <div className="footer-card">
            <h3>Follow me</h3>
            <div>
                <a href={LINKEDIN_PROFILE_URL} target="_blank"> 
                    <img className="footer-social-link" src={linkedInUrl} /> 
                </a> 
                <a href={GItHUB_PROFILE_URL} target="_blank"> 
                    <img className="footer-social-link" src={githubLogoUrl} /> 
                </a>  
            </div>
        </div>
        <div className="footer-card right">
            <h3>Hosted on</h3>
            <img src={firebaseLogo} alt="powered by logo" className="footer-social-link right" />
        </div>
    </div>);
}

export default Footer;