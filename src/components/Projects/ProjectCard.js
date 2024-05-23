import {Tools} from "./Tools";

const data = require("../../data/projects.json")

export default function ProjectCard() {
    return (
        <div className={"projects"}>
            {data.map((project) => (
                <a href={project.link}>
                    <div className={"project-card"}>
                        <p className={"project-card_title"}>{project.title}</p>
                        <p className={"project-card_description"}>{project.description}</p>
                        <div className={"project-card_tools"}><Tools tools={project.tools} /></div>
                    </div>
                </a>
            ))}
        </div>
    )
}