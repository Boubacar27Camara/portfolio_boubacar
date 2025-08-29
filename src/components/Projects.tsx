import Title from "./Title";

import img1 from '../assets/assets/projects/1.png';
import img2 from '../assets/assets/projects/2.png';
import img3 from '../assets/assets/projects/3.png';
import img4 from '../assets/assets/projects/4.png';
import img5 from '../assets/assets/projects/5.png';
import img6 from '../assets/assets/projects/6.png';
import { Github, Video } from "lucide-react";

const projets = [
    {
        id: 1,
        title: "Gestionnaire de taches",
        description: "Mon projet sur la creation d'une application web bien definit",
        technologies: ['React', 'TypeScript'],
        demoLink: '#',
        repoLink: 'https://github.com/Boubacar27Camara/mon-site',
        image: img1,
    },
    {
        id: 2,
        title: "Plateforme E-commerce",
        description: "Mon projet sur la creation d'une application web bien definit",
        technologies: ['Next.js', 'TypeScript', 'Java'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: "Gestionnaire de taches",
        description: "Mon projet sur la creation d'une application web bien definit",
        technologies: ['HTML', 'HJavascript', 'CSS'],
        demoLink: '#',
        repoLink: 'https://github.com/Bouboucamara/super-projet',
        image: img3,
    },
    {
        id: 1,
        title: "Gestionnaire de taches",
        description: "Mon projet sur la creation d'une application web bien definit",
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img4,
    },
    {
        id: 1,
        title: "Gestionnaire de taches",
        description: "Application Crud en Java EE .Gestion d'utilisateur",
        technologies: ['Java EE', 'HTML', 'CSS'],
        demoLink: 'https://www.youtube.com/watch?v=VsLh57x-aMQ&t=70s',
        repoLink: 'https://github.com/Boubacar27Camara/github-JEE',
        image: img5,
    },
    {
        id: 1,
        title: "Gestionnaire de taches",
        description: "Mon projet sur la creation d'une application web bien definit",
        technologies: ['HTML', 'Javscript', 'CSS'],
        demoLink: '#',
        repoLink: 'https://github.com/Boubacar27Camara/projet-card1',
        image: img6,
    }

]

const Projects = () =>{
    return (
        <div className="mt-2" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid grid-cols-3 gap-4">
                {projets.map((project) =>(
                    <div key={project.id} className="bg-base-300 p-5 h-fit 
                    rounded-xl shadow-lg">
                        <img src={project.image} alt={project.title} 
                        className="w-full rounded-xl h-56 object-cover" />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>
                             <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                Gitub
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects;