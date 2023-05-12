
//components

//models
import { Project } from "../Models/Project"

//assets
import projectImg from "../assets/placeimg_500_300_arch1.jpg"



interface ProjectListProps{
    projects:Project[]
} 

const ProjectList = ({projects}:ProjectListProps) => {
  return (
    <div >{
        projects.map((project)=>{
          return <div key={project.id} className="w-[300px] h-[400px] bg-gray-100">
              <img src={projectImg} alt={project.name} className="w-full h-[200px] "/>
              <div className="py-[10px] px-[5px]">
                <h2 className="font-bold text-[18px]">{project.name}</h2>
                <p>{project.description}</p>
                <p>Budget : {project.budget}</p>
            </div>
             
            </div>
        })}
        
         
        </div>
  )
}

export default ProjectList