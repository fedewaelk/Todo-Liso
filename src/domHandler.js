import { addTask, tasks } from './taskManager.js';
import { addProject, projects } from './projectManager.js';

const addTaskButton = document.getElementById('addTaskButton');
const taskModal = document.getElementById('taskModal');
const closeModal = document.getElementsByClassName('close')[0];
const taskForm = document.getElementById('taskForm');
const mainContent = document.querySelector('main');
const addProjectButton = document.getElementById('addProjectButton');
const projectModal = document.getElementById('projectModal');
const closeProjectModal = projectModal.querySelector('.close');
const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('my-projects');

const openModal = () => {
  taskModal.style.display = 'block';
};

const closeModalFunc = () => {
  taskModal.style.display = 'none';
};

const renderTasks = () => {
  mainContent.innerHTML = '';
  tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Due: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
    `;
    mainContent.appendChild(taskItem);
  });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  addTask({ title, description, dueDate, priority });

  renderTasks();

  taskForm.reset();
  closeModalFunc();
};

addTaskButton.onclick = openModal;
closeModal.onclick = closeModalFunc;
window.onclick = (event) => {
  if (event.target === taskModal) {
    closeModalFunc();
  }
};
taskForm.onsubmit = handleFormSubmit;

//projects
const openProjectModal = () => {
    projectModal.style.display = 'block';
  };
  
  const closeProjectModalFunc = () => {
    projectModal.style.display = 'none';
  };

  const handleProjectFormSubmit = (event) => {
    event.preventDefault();

    const projectName = document.getElementById('projectName').value;
  
    const newProject = addProject(projectName);

    const projectItem = document.createElement('button');
    projectItem.textContent = newProject.name;
    projectItem.dataset.projectId = newProject.id;

    projectList.appendChild(projectItem);

    projectForm.reset();
    closeProjectModalFunc();
  };

  addProjectButton.onclick = openProjectModal;
  closeProjectModal.onclick = closeProjectModalFunc;
  window.onclick = (event) => {
    if (event.target === projectModal) {
      closeProjectModalFunc();
    }
  };
  projectForm.onsubmit = handleProjectFormSubmit;

export { openModal, closeModalFunc, renderTasks };
