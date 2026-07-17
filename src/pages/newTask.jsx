import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Category from "../components/NewCategory";
import Status from "../components/NewStatus";
import { createTask } from "../services/taskServices";
import { useNavigate } from "react-router-dom";


export default function NewTask() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    // Categori
    const [category, setCategory] = useState("");
    const categories = ["Frontend", "Beckend", "QA", "DevOps"]
    // Status
    const [status, setStatus] = useState("")
    const statuses = ["Pending", "In Progress", "Completed"]
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const newTask = {
                title,
                description,
                category,
                status,
            };

            const data = await createTask(newTask);
    

            console.log(data);
            alert("Task berhasil ditambahkan!");

            navigate("/")

        } catch (error) {
            console.error(error);
        }
    };





return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
                <p className="text-gray-400 text-sm">
                    Dashboard
                </p>
                <h1 className="text-3xl font-bold">
                    Create New Task
                </h1>
            </div>

            <div>
                <div className="bg-white rounded-3xl shadow-sm p-4 mt-4">
                    <div className="mb-2">
                        <label className="block text-sm font-semibold mb-2">
                            Task Title
                        </label>

                        <input

                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter task title..."
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black" />
                    </div>
                    <div className="mb-2">
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

                        <div className="flex gap-3 flex-wrap">
                            {categories.map((item) => (
                                <Category
                                    key={item}
                                    active={category === item}
                                    onClick={() => setCategory(item)}

                                >
                                    {item}
                                </Category>
                            ))}
                        </div>
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-semibold mb-3">
                            Status
                        </label>

                        <div className="flex gap-3 flex-wrap">
                            {statuses.map((item) =>
                                <Status
                                    key={item}
                                    active={status === item}
                                    onClick={() => setStatus(item)}
                                >
                                    {item}
                                </Status>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-10">
                        <button
                            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                        >
                            Create Task
                        </button>
                    </div>
                </div>
            </div>

        </main>
    </div>

)
}