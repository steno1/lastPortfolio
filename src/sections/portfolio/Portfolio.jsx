import "./portfolio.css"

import Project from "./project/Project"
import ProjectsCategories from "./projectCategory/ProjectsCategories"
import portfolioData from "../../data/portfolioData"
import { useState } from "react"

const Portfolio = () => {
  const [projects, setProjects]=useState(portfolioData);
  return (
    <section id="portfolio">
        <h2>My Projects</h2>
      <p>Explore some of my recent projects below. Use the buttons to toggle the different categories</p>
    <div className="container portfolio__container">
<ProjectsCategories/>
<Project project={projects} />
    </div>
    </section>
  )
}

export default Portfolio
