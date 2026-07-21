import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { deleteTask } from "../services/taskServices";
import { toast } from "react-toastify";

export default function Table({
  tasks,
  setTasks,
  page,
  setPage,
  totalPages,
}) {
  const [showDelete, setShowDelete] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const getStatusStyle = (status) => {switch (status) {
    case "Pending":
      return "bg-[#EFD22D] text-yellow-600";

    case "In Progress":
      return "bg-[#279ED1] text-blue-700";

    case "Completed":
      return "bg-[#2ABE4C] text-green-700";

    default:
      return "bg-gray-200 text-white"
  }
}


  return (
    <div className="bg-white rounded-3xl mt-4 p-3 shadow-sm">
      {/* Button */}
      <div className="flex justify-end mb-4">
        <Link
          to="/new-task"
          className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl hover:bg-gray-200"
        >
          <Plus size={20} />
          New Task
        </Link>
      </div>

      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b text-left text-gray-500 text-sm">
            <th className="pb-3 w-[40%]">TASK</th>
            <th className="pb-3 w-[15%]">CATEGORY</th>
            <th className="pb-3 w-[15%]">STATUS</th>
            <th className="pb-3 w-[15%]">CREATED</th>
            <th className="pb-3 w-[15%] text-right">ACTIONS</th>
          </tr>
        </thead>
      </table>

      <div className="max-h-[250px] overflow-y-auto">
        <table className="w-full table-fixed">
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="border-b align-middle">
                <td className="py-4 w-[40%]">
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-500">
                    {task.description}
                  </p>
                </td>

                <td className="w-[15%]">
                  <span className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
                    {task.category}
                  </span>
                </td>

                <td className="w-[15%]">
                  <span className={`px-3 py-1 rounded-lg text-sm ${getStatusStyle(task.status)}`}>
                    {task.status}
                  </span>
                </td>

                <td className="w-[15%] font-medium">
                   {new Date(task.createdAt).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month:"short",
                    year:"numeric"
                   })}
                </td>

                <td className="w-[15%]">
                  <div className="flex justify-end gap-4">
                    <Link to={`/edit-task/${task._id}`}>
                      <Pencil size={18}
                        className="cursor-pointer" />
                    </Link>

                    <Trash2
                      size={18}
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedTask(task);
                        setShowDelete(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal
        isOpen={showDelete}
        taskTitle={selectedTask?.title}
        onClose={() => setShowDelete(false)}
        onDelete={async () => {
          try {
            await deleteTask(selectedTask._id);

            setTasks((prev) =>
              prev.filter((task) => task._id !== selectedTask._id)
            );
            setShowDelete(false);
            setSelectedTask(null);

            toast.success("Task berhasil dihapus!")

          } catch (error) {
            console.error(error);

            toast.error("Gagal menghapus task!")
          }
        }}
      />
      <div className="flex justify-center items-center gap-3 mt-6">

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold">
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>

      </div>
    </div>
  );
}