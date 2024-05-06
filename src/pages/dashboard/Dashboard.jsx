import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import useTodo from "../../hooks/useTodo";
import moment from "moment";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const [droper, setDroper] = useState(false);
  const [modal, openModal] = useState(false);
  const [taskModal, openTaskModal] = useState(false);
  const [editTaskData, seteditTaskData] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const [toDo , loading , refetch] = useTodo();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/tasks/${user.email}`);
        if (response.data) {
          setTasks(response.data);
        } else {
          console.error("Failed to fetch tasks");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);


  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const movedTask = updatedTasks.splice(result.source.index, 1)[0];
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);

    const order = result.destination.index + 1;
    const newType = result.destination.droppableId;
    await axios.patch(`http://localhost:5000/api/task`, {
      id: movedTask._id,
      type: newType,
      order,
    });
  };



  const updateTaskType = async (taskId, newType) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${taskId}`,
        {
          type: newType,
        }
      );
      if (response.data) {
        refetch();
        toast.success(`Task moved to ${newType} successfully!`);
      } else {
        console.error(`Failed to move task to ${newType}`);
      }
    } catch (error) {
      console.error("Error updating task type:", error);
    }
  };

  const onSubmit = async (data) => {
    const task = {
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      name: user.displayName,
      email: user.email,
      type: "todo",
      order: 1,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks",
        task
      );
      if (response.data) {
        refetch();
        openModal(false);
        toast.success("Task added successfully!");
        reset();
      } else {
        toast.error("Faild to add a task!");
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/tasks/${id}`
      );
      if (response.data) {
        refetch();
        toast.success("Task deleted successfully!");
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const editTaskSubmit = (task) => {
    seteditTaskData(task);
    openTaskModal(!taskModal);
  };

  const editTask = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    const priority = e.target.priority.value;

    const id = editTaskData._id;

    const task = {
      title: title,
      description: description,
      deadline: deadline,
      priority: priority,
      type: "todo",
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        task
      );
      if (response.data) {
        refetch();
        openTaskModal(false);
        toast.success("Task updated successfully!");
        seteditTaskData(response.data);
      } else {
        console.error("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  return (
    <div className="relative">
      <div className="xl:h-screen">
        <div>
          <div className="relative lg:block">
            <nav
              className={`${!open ? "w-0" : "w-[280px]"}
                    fixed top-0 transition-all lg:mt-0 mt-16 left-0 bottom-0 flex flex-col overflow-hidden z-50 bg-white border-r border-gray-100`}
              id="sidenav"
            >
              <div className="flex items-center justify-center w-full px-4 pt-4 pb-4 border-b border-gray-200">
                <a href="#">
                  <h2 className="text-xl text-gray-800 lg:text-2xl text-center font-bold whitespace-nowrap">
                    TaskSync<span className="text-blue-500"> Pro</span>
                  </h2>
                </a>
              </div>
              <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
                <div className="flex flex-col gap-3 items-center justify-center border-b border-gray-200">
                  <img
                    src={user?.photoURL}
                    className="lg:h-28 lg:w-28 md:h-20 md:w-20 h-16 w-16 object-cover rounded-full"
                    alt=""
                  />
                  <h3 className="font-semibold text-xl text-gray-800 mb-4">
                    {user.displayName}
                  </h3>
                </div>
                <ul className="mb-8 text-sm lg:text-base">
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ||
                        location.pathname.includes("/dashboard")
                          ? "bg-blue-700 text-white px-6 py-3 w-full flex items-center"
                          : "text-gray-800 group hover:text-white hover:bg-gray-900"
                      }
                    >
                      <span className="inline-block mr-3">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-config-id="auto-svg-2-1"
                        >
                          <path
                            d="M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 15.6666C8.00181 15.6663 7.01656 15.4414 6.11714 15.0087C5.21773 14.5759 4.42719 13.9464 3.80409 13.1666H7.15015C7.38188 13.4286 7.66662 13.6383 7.98551 13.782C8.3044 13.9257 8.65017 14 8.99992 14C9.34968 14 9.69544 13.9257 10.0143 13.782C10.3332 13.6383 10.618 13.4286 10.8497 13.1666H14.1958C13.5727 13.9464 12.7821 14.5759 11.8827 15.0087C10.9833 15.4414 9.99804 15.6663 8.99992 15.6666ZM8.16659 11.5C8.16659 11.3351 8.21546 11.174 8.30703 11.037C8.3986 10.8999 8.52875 10.7931 8.68102 10.7301C8.83329 10.667 9.00085 10.6505 9.1625 10.6826C9.32415 10.7148 9.47263 10.7942 9.58918 10.9107C9.70572 11.0272 9.78509 11.1757 9.81724 11.3374C9.8494 11.499 9.83289 11.6666 9.76982 11.8189C9.70675 11.9711 9.59994 12.1013 9.4629 12.1929C9.32586 12.2844 9.16474 12.3333 8.99992 12.3333C8.77898 12.3331 8.56714 12.2452 8.41091 12.089C8.25468 11.9327 8.16681 11.7209 8.16659 11.5ZM15.1751 11.5017L15.1665 11.5H11.4999C11.4983 10.9846 11.3373 10.4824 11.0389 10.0623C10.7405 9.64218 10.3193 9.32472 9.83325 9.15352V6.49996C9.83325 6.27894 9.74546 6.06698 9.58918 5.9107C9.4329 5.75442 9.22093 5.66663 8.99992 5.66663C8.77891 5.66663 8.56695 5.75442 8.41067 5.9107C8.25439 6.06698 8.16659 6.27894 8.16659 6.49996V9.15352C7.68054 9.32472 7.25939 9.64218 6.96098 10.0623C6.66256 10.4824 6.50151 10.9846 6.49992 11.5H2.83334L2.82474 11.5017C2.60799 10.9669 2.46221 10.406 2.39114 9.83329H3.16659C3.3876 9.83329 3.59956 9.74549 3.75584 9.58921C3.91212 9.43293 3.99992 9.22097 3.99992 8.99996C3.99992 8.77894 3.91212 8.56698 3.75584 8.4107C3.59956 8.25442 3.3876 8.16663 3.16659 8.16663H2.39114C2.54005 6.9821 3.00621 5.85981 3.74037 4.91838L4.28597 5.46399C4.36335 5.54137 4.4552 5.60274 4.5563 5.64462C4.65739 5.68649 4.76574 5.70804 4.87517 5.70804C4.98459 5.70804 5.09294 5.68649 5.19404 5.64461C5.29513 5.60274 5.38699 5.54136 5.46436 5.46399C5.54173 5.38661 5.60311 5.29476 5.64498 5.19366C5.68686 5.09257 5.70841 4.98422 5.70841 4.87479C5.70841 4.76537 5.68686 4.65702 5.64498 4.55592C5.60311 4.45483 5.54173 4.36297 5.46435 4.2856L4.91881 3.74005C5.86016 3.00613 6.98227 2.5401 8.16659 2.39118V3.16663C8.16659 3.38764 8.25439 3.5996 8.41067 3.75588C8.56695 3.91216 8.77891 3.99996 8.99992 3.99996C9.22093 3.99996 9.4329 3.91216 9.58918 3.75588C9.74546 3.5996 9.83325 3.38764 9.83325 3.16663V2.39118C11.0176 2.5401 12.1397 3.00613 13.081 3.74005L12.5355 4.2856C12.3792 4.44186 12.2914 4.6538 12.2914 4.87479C12.2914 5.09578 12.3792 5.30772 12.5355 5.46399C12.6917 5.62025 12.9037 5.70804 13.1247 5.70804C13.3457 5.70804 13.5576 5.62026 13.7139 5.46399L14.2595 4.91838C14.9936 5.85981 15.4598 6.9821 15.6087 8.16663H14.8333C14.6122 8.16663 14.4003 8.25442 14.244 8.4107C14.0877 8.56698 13.9999 8.77894 13.9999 8.99996C13.9999 9.22097 14.0877 9.43293 14.244 9.58921C14.4003 9.74549 14.6122 9.83329 14.8333 9.83329H15.6087C15.5376 10.406 15.3919 10.9669 15.1751 11.5017Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <div className="text-gray-800  px-6 py-3 w-full flex items-center hover:text-white hover:bg-gray-900">
                      <span className="inline-block mr-3 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5 group"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path>
                        </svg>
                      </span>
                      <span>Profile</span>
                    </div>
                  </li>

                  <li>
                    <div className="text-gray-800  px-6 py-3 w-full flex items-center hover:text-white hover:bg-gray-900">
                      <span className="inline-block mr-3 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5 group"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </span>
                      <span>Messages</span>
                    </div>
                  </li>

                  <li>
                    <div className="text-gray-800  px-6 py-3 w-full flex items-center hover:text-white hover:bg-gray-900">
                      <span className="inline-block mr-3 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                        </svg>
                      </span>
                      <span>Gallery</span>
                    </div>
                  </li>

                  <li>
                    <div className="text-gray-800  px-6 py-3 w-full flex items-center hover:text-white hover:bg-gray-900">
                      <span className="inline-block mr-3 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5 group"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                        </svg>
                      </span>
                      <span> Calendar </span>
                    </div>
                  </li>

                  <li>
                    <div className="text-gray-800  px-6 py-3 w-full flex items-center hover:text-white hover:bg-gray-900">
                      <span className="inline-block mr-3 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                          />
                        </svg>
                      </span>
                      <span> Category </span>
                    </div>
                  </li>

                  <li>
                    <div className="text-gray-800  px-6 py-3 w-full flex items-center hover:text-white hover:bg-gray-900">
                      <span className="inline-block mr-3 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </span>
                      <span> Help </span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div
            className={`mx-auto transition-all content-wrapper ${
              !open ? "lg:ml-0" : "lg:ml-[280px]"
            }`}
            id="dash"
          >
            <section className="sticky top-0 z-40 px-3 py-3 bg-white shadow  lg:px-5">
              <nav className="relative">
                <div className="flex items-center justify-between">
                  <div className="items-center mr-auto lg:flex">
                    <button
                      onClick={() => {
                        setOpen(!open);
                        setDroper(false);
                      }}
                      className="px-2 py-3 text-blue-500 bg-blue-100 rounded"
                    >
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <span>
                        <svg
                          mlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="text-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </span>
                    </div>
                    <div className="mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </div>
                    <div className="relative mr-4 ">
                      <span>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full"></div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="text-gray-400"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                      </span>
                    </div>
                    <div className="relative text-left lg:inline-block">
                      <div className="lg:block">
                        <button className="flex items-center">
                          <div className="hidden mr-3 text-right md:block">
                            <p className="text-sm font-bold text-gray-800">
                              {user.displayName}
                            </p>
                          </div>
                          <div className="mr-2">
                            <img
                              src={user.photoURL}
                              className="object-cover w-10 h-10 rounded-full"
                              alt=""
                            />
                          </div>
                          <span
                            className="cursor-pointer p-2"
                            onClick={() => setDroper(!droper)}
                          >
                            <svg
                              className="text-gray-400"
                              width="12"
                              height="8"
                              viewBox="0 0 10 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div
                        id="dropdown_profile"
                        className={`${
                          droper
                            ? "absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow"
                            : "hidden"
                        }`}
                      >
                        <div className="py-1">
                          <Link to="/">
                            <div className="flex px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-5 h-5 group"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                              </svg>
                              <span className="ml-2">Home</span>
                            </div>
                          </Link>
                          <a
                            href="#"
                            className="flex px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="3"></circle>
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            Account
                          </a>
                          <span
                            onClick={() => {
                              logOut();
                            }}
                            className="flex px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                              <polyline points="16 17 21 12 16 7"></polyline>
                              <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                            Logout
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </section>
            <div className="p-4 lg:p-8">
              <div className="">
                <div className="mx-auto">
                  <div className="flex items-center justify-between mb-6 mt-3 lg:mt-0">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Dashboard
                    </h1>
                    <button
                      onClick={() => openModal(!modal)}
                      className="py-3 px-5 font-semibold lg:text-lg bg-blue-600 rounded-md text-white flex items-center justify-center"
                    >
                      {" "}
                      <span className="text-lg lg:text-xl mr-2">
                        <FaPlus />
                      </span>{" "}
                      <span>Add a Task</span>
                    </button>
                  </div>

                  <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-3">
        {["todo", "ongoing", "completed"].map((sectionType) => (
          <Droppable key={sectionType} droppableId={sectionType}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="p-6 mb-6 bg-gray-100 rounded shadow card"
              >
                <h2 className="mb-6 text-xl font-semibold text-gray-800">
                  {sectionType.charAt(0).toUpperCase() + sectionType.slice(1)}
                </h2>
                <div>
                  {tasks.filter((data) => data.type === sectionType).length ===
                  0 ? (
                    <div className="bg-gray-200 p-3 rounded-md shadow-md text-lg font-semibold text-gray-800 text-center">
                      {`${sectionType.charAt(0).toUpperCase() +
                        sectionType.slice(1)} List is Empty!`}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {tasks
                        .filter((data) => data.type === sectionType)
                        .map((data, index) => (
                          <Draggable
                            key={data._id}
                            draggableId={data._id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className="bg-gray-200 p-3 rounded-md shadow-md"
                              >
                                 <div className="flex items-center justify-between">
                                    <div>
                                      <h2 className="text-lg font-semibold text-gray-800">
                                        {data.title}
                                      </h2>
                                      <p className="text-sm font-light text-gray-600 mt-1">
                                        {data.description}
                                      </p>
                                      <div className="flex flex-col items-start gap-1 mt-3">
                                        {data.priority === "Low" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-yellow-400 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "Moderate" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-purple-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "High" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-orange-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        <button className="py-2 font-medium text-sm rounded-lg text-green-600">
                                          <span className="text-base text-gray-800">
                                            Deadline:
                                          </span>{" "}
                                          {moment(data.deadline).format(
                                            "DD MMMM YYYY"
                                          )}
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2">
                                      <button
                                        onClick={() => editTaskSubmit(data)}
                                        className="text-white p-3 bg-blue-600 text-xl rounded-lg"
                                      >
                                        <FaRegEdit />
                                      </button>
                                      <button
                                        onClick={() => handleDelete(data._id)}
                                        className="text-white p-3 bg-red-500 text-xl rounded-xl"
                                      >
                                        <MdDelete />
                                      </button>
                                    </div>
                                  </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>

                  
                  {/* <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-3"tasks
                    <div className="p-6 mb-6 bg-gray-100 rounded shadow card">
                      <h2 className="mb-6 text-xl font-semibold text-gray-800">
                        {" "}
                        To Do{" "}
                      </h2>
                      <div>
                        {toDo.filter((data) => data.type === "todo").length ===
                        0 ? (
                          <div className="bg-gray-200 p-3 rounded-md shadow-md text-lg font-semibold text-gray-800 text-center">
                            Todo List is Empty!
                          </div>
                        ) : (
                          <div className="flex flex-col gap-3">
                            {toDo
                              .filter((data) => data.type === "todo")
                              .map((data) => (
                                <div
                                  key={data._id}
                                  className="bg-gray-200 p-3 rounded-md shadow-md"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h2 className="text-lg font-semibold text-gray-800">
                                        {data.title}
                                      </h2>
                                      <p className="text-sm font-light text-gray-600 mt-1">
                                        {data.description}
                                      </p>
                                      <div className="flex flex-col items-start gap-1 mt-3">
                                        {data.priority === "Low" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-yellow-400 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "Moderate" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-purple-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "High" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-orange-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        <button className="py-2 font-medium text-sm rounded-lg text-green-600">
                                          <span className="text-base text-gray-800">
                                            Deadline:
                                          </span>{" "}
                                          {moment(data.deadline).format(
                                            "DD MMMM YYYY"
                                          )}
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2">
                                      <button
                                        onClick={() => editTaskSubmit(data)}
                                        className="text-white p-3 bg-blue-600 text-xl rounded-lg"
                                      >
                                        <FaRegEdit />
                                      </button>
                                      <button
                                        onClick={() => handleDelete(data._id)}
                                        className="text-white p-3 bg-red-500 text-xl rounded-xl"
                                      >
                                        <MdDelete />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className="p-6 mb-6 bg-gray-100 rounded shadow card"
                      
                    >
                      <h2 className="mb-6 text-xl font-semibold text-gray-800">
                        {" "}
                        Ongoing{" "}
                      </h2>
                      <div>
                        {toDo.filter((data) => data.type === "ongoing").length === 0 ? (
                          <div className="bg-gray-200 p-3 rounded-md shadow-md text-lg font-semibold text-gray-800 text-center">
                            Ongoing List is Empty!
                          </div>
                        ) : (
                          <div className="flex flex-col gap-3">
                            {toDo
                              .filter((data) => data.type === "ongoing")
                              .map((data) => (
                                <div
                                  key={data._id}
                                  className="bg-gray-200 p-3 rounded-md shadow-md"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h2 className="text-lg font-semibold text-gray-800">
                                        {data.title}
                                      </h2>
                                      <p className="text-sm font-light text-gray-600 mt-1">
                                        {data.description}
                                      </p>
                                      <div className="flex flex-col items-start gap-1 mt-3">
                                        {data.priority === "Low" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-yellow-400 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "Moderate" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-purple-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "High" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-orange-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        <button className="py-2 font-medium text-sm rounded-lg text-green-600">
                                          <span className="text-base text-gray-800">
                                            Deadline:
                                          </span>{" "}
                                          {moment(data.deadline).format(
                                            "DD MMMM YYYY"
                                          )}
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2">
                                      <button
                                        onClick={() => editTaskSubmit(data)}
                                        className="text-white p-3 bg-blue-600 text-xl rounded-lg"
                                      >
                                        <FaRegEdit />
                                      </button>
                                      <button
                                        onClick={() => handleDelete(data._id)}
                                        className="text-white p-3 bg-red-500 text-xl rounded-xl"
                                      >
                                        <MdDelete />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6 mb-6 bg-gray-100 rounded shadow card">
                      <h2 className="mb-6 text-xl font-semibold text-gray-800">
                        {" "}
                        Completed{" "}
                      </h2>
                      {toDo.filter((data) => data.type === "completed").length === 0 ? (
                          <div className="bg-gray-200 p-3 rounded-md shadow-md text-lg font-semibold text-gray-800 text-center">
                            Completed List is Empty!
                          </div>
                        ) : (
                          <div className="flex flex-col gap-3">
                            {toDo
                              .filter((data) => data.type === "completed")
                              .map((data) => (
                                <div
                                  key={data._id}
                                  className="bg-gray-200 p-3 rounded-md shadow-md"
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h2 className="text-lg font-semibold text-gray-800">
                                        {data.title}
                                      </h2>
                                      <p className="text-sm font-light text-gray-600 mt-1">
                                        {data.description}
                                      </p>
                                      <div className="flex flex-col items-start gap-1 mt-3">
                                        {data.priority === "Low" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-yellow-400 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "Moderate" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-purple-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        {data.priority === "High" && (
                                          <button className="px-5 py-2 font-semibold rounded-lg bg-orange-500 text-white">
                                            {data.priority}
                                          </button>
                                        )}
                                        <button className="py-2 font-medium text-sm rounded-lg text-green-600">
                                          <span className="text-base text-gray-800">
                                            Deadline:
                                          </span>{" "}
                                          {moment(data.deadline).format(
                                            "DD MMMM YYYY"
                                          )}
                                        </button>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2">
                                      <button
                                        onClick={() => editTaskSubmit(data)}
                                        className="text-white p-3 bg-blue-600 text-xl rounded-lg"
                                      >
                                        <FaRegEdit />
                                      </button>
                                      <button
                                        onClick={() => handleDelete(data._id)}
                                        className="text-white p-3 bg-red-500 text-xl rounded-xl"
                                      >
                                        <MdDelete />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                    </div>
                  </div> */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          modal
            ? " absolute h-screen top-0 left-0 flex items-center justify-center w-full z-50"
            : "hidden"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
      >
        <div className="h-auto p-4 mx-2 text-left bg-white shadow-3xl rounded-3xl md:max-w-xl md:p-6 lg:p-8 md:mx-0">
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-800">
              Add a New Task
            </h2>
          </div>
          <div>
            <form
              className="space-y-4 md:space-y-3 w-72 lg:w-96"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Task Title"
                type="text"
                id="title"
                {...register("title", { required: true })}
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                id="description"
                placeholder="Task Description"
                className="bg-gray-50  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  px-2 leading-tight  border py-2"
                {...register("description", { required: true })}
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="deadline"
              >
                Deadline:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                type="date"
                id="deadline"
                {...register("deadline")}
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="priority"
              >
                Priority:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="priority"
                {...register("priority")}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>

              <span className="justify-center gap-3 lg:gap-4 flex shadow-sm items-center">
                <button
                  onClick={() => openModal(false)}
                  className="inline-block px-5 py-3 mt-3 font-semibold leading-none text-blue-500 border border-blue-500 rounded-lg hover:text-blue-700 hover:border-blue-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-block px-5 py-3 mt-3 font-semibold leading-none text-gray-100 bg-blue-600 hover:bg-blue-500 border border-gray-100 rounded-lg"
                >
                  Cofirm
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`${
          taskModal
            ? " absolute h-screen top-0 left-0 flex items-center justify-center w-full z-50"
            : "hidden"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
      >
        <div className="h-auto p-4 mx-2 text-left bg-white shadow-3xl rounded-3xl md:max-w-xl md:p-6 lg:p-8 md:mx-0">
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-800">
              Edit a Task
            </h2>
          </div>
          <div>
            <form
              className="space-y-4 md:space-y-3 w-72 lg:w-96"
              onSubmit={editTask}
            >
              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Task Title"
                type="text"
                id="title"
                name="title"
                defaultValue={editTaskData.title}
                required
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                id="description"
                placeholder="Task Description"
                className="bg-gray-50  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  px-2 leading-tight  border py-2"
                name="description"
                defaultValue={editTaskData.description}
                required
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="deadline"
              >
                Deadline:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                type="date"
                id="deadline"
                name="deadline"
                defaultValue={editTaskData.deadline}
                required
              />

              <label
                className="block mb-2  font-medium text-gray-900"
                htmlFor="priority"
              >
                Priority:
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="priority"
                name="priority"
                required
              >
                <option defaultValue={editTaskData.priority}>
                  {editTaskData.priority}
                </option>
                {editTaskData.priority !== "Low" && (
                  <option value="Low">Low</option>
                )}
                {editTaskData.priority !== "Moderate" && (
                  <option value="Moderate">Moderate</option>
                )}
                {editTaskData.priority !== "High" && (
                  <option value="High">High</option>
                )}
              </select>

              <span className="justify-center gap-3 lg:gap-4 flex shadow-sm items-center">
                <button
                  type="button"
                  onClick={() => {
                    seteditTaskData({});
                    openTaskModal(!taskModal);
                  }}
                  className="inline-block px-5 py-3 mt-3 font-semibold leading-none text-blue-500 border border-blue-500 rounded-lg hover:text-blue-700 hover:border-blue-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-block px-5 py-3 mt-3 font-semibold leading-none text-gray-100 bg-blue-600 hover:bg-blue-500 border border-gray-100 rounded-lg"
                >
                  Cofirm
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Dashboard;
