
//components
import ProjectList from "./ProjectList"

//db
import projects from "../db/db.json"

const ProjectsPage = () => {
  return (
    <>
    <h1 className='font-bold text-[20px] p-[10px]'>Projects</h1>
    <ProjectList projects={projects.projects}/>

    </>
    
  )
}

export default ProjectsPage