import { addTask, tasks } from './taskManager.js';

const addTaskButton = document.getElementById('addTaskButton');
const taskModal = document.getElementById('taskModal');
const closeModal = document.getElementsByClassName('close')[0];
const taskForm = document.getElementById('taskForm');
const mainContent = document.querySelector('main');

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

export { openModal, closeModalFunc, renderTasks };
