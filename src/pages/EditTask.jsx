import Sidebar from "../components/Sidebar"
import Category from "../components/EditCategory"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTasks, updateTask } from "../services/taskServices";
import Status from "../components/EditStatus";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    // Category
    const [active, setActive] = useState("");
    const categories = ["Frontend", "Beckend", "QA", "DevOps"]

    // Status
    const [activee, setActivee] = useState("");
    const statuses = ["Pending", "In Progress", "Completed"]

    const { id } = useParams();
    console.log("ID, dari URL:", id)
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token){
            toast.warning("Silahkan login terlebih dahulu!");
            
            setTimeout(() => {
                navigate("/login    ")
            }
            
            ), 1000
        }

        const fetchTask = async () => {
            try {
                const data = await getTasks();

                const task = data.tasks.find((item) => item._id === id);

                if (task) {
                    setTitle(task.title);
                    setDescription(task.description);
                    setActive(task.category)
                    setActivee(task.status)
                }
            } catch (error) {
                console.log(error)
            }


        };

        fetchTask();
    }, [id])

    const handleUpdate = async () => {
        try{
            await updateTask(id, {
                title,
                description,
                category: active,
                status: activee
            });

            navigate("/")
        } catch (error) {
            console.log(error);
        }
    };

 

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 p-2">
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <p className="text-gray-400 text-sm">
                        Dashboard
                    </p>
                    <h1 className="text-3xl font-bold">
                        Edit Task
                    </h1>
                </div>

                <div>
                    <div className="bg-white rounded-3xl shadow-sm p-4 mt-4">
                        <div className="mb-2">
                            <label className="block text-sm font-semibold mb-2">
                                Task title
                            </label>

                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter task title..."
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">
                                Description
                            </label>

                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter task description..."
                                rows={5}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-black"
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-3">
                                Category
                            </label>

                            <div className="flex gap-3 flex=wrap">
                                {categories.map((category) => (
                                    <Category
                                        key={category}
                                        active={active === category}
                                        onClick={() => setActive(category)}
                                    >
                                        {category}
                                    </Category>
                                ))}
                            </div>
                        </div>
                        <div className="mb-8">
                            <label className="block text-sm font-semibold mb-3">
                                Status
                            </label>

                            <div className="flex gap-3 flex-wrap">
                                {statuses.map((status) => (

                                    <Status
                                        key={status}
                                        active={activee === status}
                                        onClick={() => setActivee(status)}

                                    >
                                        {status}

                                    </Status>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-10">
                            <Link
                            to="/"
                                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </Link>

                            <button
                                onClick={handleUpdate}
                                className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                            >
                                Edit task
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>

    )
}