

const ProjectHolder = (props) => {
    const projects = props.projects

    return (

        
        <div className="wrapper">



            {projects.map((project) => (
                <div class="cards_wrap"key={project.id}>
                    <div class="card_item">
                            <div className="card_inner" >
                                <div className="name">{project.name}</div>
                                <img src={project.image}></img>
                                <div className="github">GitHub: <a href={project.github}>{project.github}</a></div>
                                <div>Site: <a href={project.app}>{project.app}</a></div>
                                <div className="description">Description: {project.description}</div>
                            </div>
                        </div>
                    </div>
                
            ))}

        </div>
    );
}

export default ProjectHolder;