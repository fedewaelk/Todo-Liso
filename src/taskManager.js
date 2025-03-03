const Task = ({ title, description = "", dueDate = null, priority = "normal" }) => {
    let completed = false;
  
    const toggleCompleted = () => {
      completed = !completed;
    };
  
    return {
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      priority,
      get completed() {
        return completed;
      },
      toggleCompleted,
    };
  };
  
  const tasks = [];
  
  const addTask = (taskData) => {
    const task = Task(taskData);
    tasks.push(task);
    return task;
  };
  
  export { addTask, tasks };
  