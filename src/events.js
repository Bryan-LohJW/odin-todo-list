import { projectPopulate, todoPopulate } from "./domhandler";
import { Project } from "./project";

export const projectSubmit = (projectList) => {
    const projectName = document.querySelector('.project-name').value;
    const project = new Project(projectName)
    projectList.pushProject(project);
    alert(project);
    alert(projectList.projectList);

    const background = document.querySelector('.background');
    const body = document.querySelector('body');
    body.removeChild(background);

    projectPopulate(projectList);
}

export const changeProject = (project) => {
    todoPopulate(project);
}