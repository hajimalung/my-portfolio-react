// Importing the image
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
                Body Right
            </div>
        </div>)
    );
}
export default Body;