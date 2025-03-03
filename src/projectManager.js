const Project = (name) => {
    const tasks = [];
  
    const addTask = (task) => {
      tasks.push(task);
    };
  
    return {
      id: Date.now().toString(),
      name,
      tasks,
      addTask,
    };
  };
  
  const projects = [];
  
  const addProject = (projectName) => {
    const project = Project(projectName);
    projects.push(project);
    return project;
  };
  
  export { addProject, projects };
  