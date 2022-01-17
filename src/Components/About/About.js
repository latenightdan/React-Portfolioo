
import me from "../../Assets/me/Sequence 01.00_00_00_00.Still001.jpg"




const About = () => {
    return ( 
        <div className="main-content">
        <header className="dHead">
        <h2 className="dName"> Dan Natale</h2>
        <h4 className = "dTitle"> Digital Content Creator</h4>
        
    </header>
        <div class="me">
            <img src={me} alt=""className="myImg"></img>
            
          </div>
        <p className="dBio">
            Dan is a digital content creator who can create robust 
            digital assets for a wide variety of purposes. 
            Whether you need digital video, an upgraded website, 
            graphic design, or even an interactive online experience(video game), 
            Dan = theMan. 
        </p>
       
    </div>
    

     );
}
 
export default About;