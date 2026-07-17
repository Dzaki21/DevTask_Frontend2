import Sidebar from "../components/Sidebar"
import Category from "../components/EditCategory"
import { useState } from "react";
import Status from "../components/EditStatus";

export default function EditTask() {
    // Category
    const [active, setActive] = useState("");
    const categories = ["Frontend", "Beckend", "QA", "DevOps"]

    // Status
    const [activee, setActivee] = useState("");
    const statuses = ["Pending", "In Progress", "Completed"]

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
                                Task Title
                            </label>

                            <input
                                type="text"
                                placeholder="Enter task title..."
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">
                                Description
                            </label>

                            <textarea
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
                            <button
                                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>

                            <button
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