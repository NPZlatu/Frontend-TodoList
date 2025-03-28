import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../../config";

const TodoComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasksRequest = async () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (!access_token || !refresh_token) {
      setTasks([]);
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    try {
      const response = await axios.get(`${config.API_BASE_URL}/todos/`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = () => {
    // Check if the new task is empty
    // If it is, show an error message and return
    if (!newTask.trim()) {
      toast.error("Task cannot be empty");
      return;
    }

    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (!access_token || !refresh_token) {
      toast.error("You are not authenticated. Please login again.");
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    const addNewTaskRequest = async () => {
      try {
        const response = await axios.post(`${config.API_BASE_URL}/todos/`, {
          title: newTask,
          completed: 0,
        });
        setTasks([...tasks, response.data]);
        setNewTask("");
        fetchTasksRequest();
        toast.success("Task added successfully");
      } catch (error) {
        console.error("Error adding task:", error);
        toast.error("Error adding task. Please try again.");
      }
    };

    addNewTaskRequest();
  };

  const updateTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newText } : task
    );
    setTasks(updatedTasks);
  };

  /** Delete the task with id **/
  const deleteTask = (id) => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (!access_token || !refresh_token) {
      toast.error("You are not authenticated. Please login again.");
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    const deleteTaskRequest = async () => {
      try {
        await axios.delete(`${config.API_BASE_URL}/todos/${id}/`);
        setTasks(tasks.filter((task) => task.id !== id));
        toast.success("Task deleted");
      } catch (error) {
        console.error("Error deleting task:", error);
        toast.error("Error deleting task. Please try again.");
      }
    };

    deleteTaskRequest();
  };

  const toggleStatus = (id, completed) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;
    updateTaskRequest(id, {
      title: task.title,
      completed,
    });
  };

  // Function to update task details
  const updateTaskRequest = async (id, newDetail) => {
    // Check if the new task is empty
    // If it is, show an error message and return
    if (newDetail.completed == null && !newDetail.title.trim()) {
      toast.error("Task cannot be empty");
      return;
    }

    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (!access_token || !refresh_token) {
      toast.error("You are not authenticated. Please login again.");
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    try {
      const response = await axios.put(
        `${config.API_BASE_URL}/todos/${id}/`,
        newDetail
      );
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
      toast.success("Task updated successfully");
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Error updating task. Please try again.");
    }
  };

  useEffect(() => {
    fetchTasksRequest();
  }, []);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-calm-blue mb-6">Task List</h2>

      <div className="flex items-center mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-calm-blue"
        />
        <button
          onClick={addTask}
          className="ml-4 bg-calm-blue text-white py-3 px-6 rounded-lg hover:bg-calm-blue-dark transition duration-300"
        >
          Add Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4">Task</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t">
                <td className="p-4">
                  <input
                    type="text"
                    value={task.title}
                    onChange={(e) => updateTask(task.id, e.target.value)}
                    onBlur={(e) =>
                      updateTaskRequest(task.id, { title: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-calm-blue"
                  />
                </td>
                <td className="p-4">
                  <select
                    value={task.completed ? "1" : "0"}
                    onChange={() =>
                      toggleStatus(task.id, task.completed ? "0" : "1")
                    }
                    className="p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="0">Pending</option>
                    <option value="1">Done</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoComponent;
