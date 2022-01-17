import {useState, useEffect} from "react";

import ProjectHolder from "../projectHolder/projectHolder";

import myspace2 from "../../Assets/project-photos/mspace.png"
import hmbp from "../../Assets/project-photos/hmbp.jpg"
import budge from "../../Assets/project-photos/budget.png"



const Portfolio= () => {
    useEffect(() => {
        console.log("yummy")
    })

    const [projects, setProject] = useState([
        {
            id: 1,
            name: "Myspace 2",
            image: myspace2,
            github: "https://github.com/fab1214/MySpace-2",
            app: "https://secure-falls-17879.herokuapp.com/",
            description: "Myspace, but again",
            technologies: ""
        },
        {
            id: 2,
            name: "Honor-Mercy Beer-pong",
            image: hmbp,
            github: "https://github.com/latenightdan/Honor-Mercy-Beer-Pong",
            app: "https://latenightdan.itch.io/",
            description: "A fun party classic, with a suprising twist",
            technologies: ""
        },
        {
            id: 3,
            name: "Budget Tracker",
            image: budge,
            github: "https://github.com/latenightdan/budget-tracker",
            app: "https://budget-trackerrrrrr.herokuapp.com/",
            description: "A boring, but useful budget tracking app",
            technologies: ""
        },
      
    ])


    return ( <ProjectHolder projects={projects}/>);
}
 
export default Portfolio;