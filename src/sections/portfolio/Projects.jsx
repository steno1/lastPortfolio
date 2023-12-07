import Project from "./Project"

const Projects = ({project}) => {
  return (
    <div className="portfolio__projects">
      {project.map(project=>(
        <Project key={project.id}
         Project={project}/>
      ))}
    </div>
  )
}

export default Projects
