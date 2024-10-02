// Importing the image
import { Link } from 'react-router-dom';
import profileImage from 'url:../assets/images/bright_profile.jpg';
const Body = ()=>{
    // Using URL constructor for optimization
    const imageUrl = new URL(`${profileImage}?width=640&quality=75`, import.meta.url);

    return (
        (<div className="app-body">
            <div className="body-left" >
                <img 
                className="profile-image"
                src={`${imageUrl}`} 
                alt="This is profile image">
                </img>
            </div>
            <div className="body-right">
                <h1 className="greating-text">Hello</h1>
                <h3>A bit about me</h3>
                <span className='aboutme-text'>
                Dynamic Senior UI Software Engineer with almost 9 years of experience in crafting intuitive, high-performance user interfaces. A proven leader in optimizing application performance and providing user-centered solutions that boost engagement and satisfaction, backed by a strong foundation in UX/UI design principles. Committed to innovation and continuous improvement.
                </span>
                <div className='round-navs-container'>
                    <Link to={"/resume"} className='round-nav-item'>Resume</Link>
                    <Link to={"/projects"} className='round-nav-item'>Projects</Link>
                    <Link to={"/contact"} className='round-nav-item'>Contact</Link>
                </div>
            </div>
        </div>)
    );
}
export default Body;