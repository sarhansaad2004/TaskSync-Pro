import React from 'react';
import { useDrag } from 'react-dnd';
import moment from "moment";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";

const DraggableTask = ({ data, onEdit, onDelete }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { task: data, onDragStart: onEdit },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
   <div className=''>
     <div
      ref={drag}
      className={`bg-gray-200 p-3 rounded-md shadow-md ${isDragging ? 'opacity-50' : ''}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
          <p className="text-sm font-light text-gray-600 mt-1">{data.description}</p>
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
              <span className="text-base text-gray-800">Deadline:</span>{' '}
              {moment(data.deadline).format("DD MMMM YYYY")}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <button onClick={() => onEdit(data)} className="text-white p-3 bg-blue-600 text-xl rounded-lg">
            <FaRegEdit />
          </button>
          <button onClick={() => onDelete(data._id)} className="text-white p-3 bg-red-500 text-xl rounded-xl">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default DraggableTask;
