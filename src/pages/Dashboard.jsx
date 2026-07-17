import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { getTasks } from "../services/taskServices";


export default function Dashboard() {

    useEffect(() => {
        async function fetchTasks() {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchTasks();
    }, [])
    const [tasks, setTasks] = useState([]);
    const totalTask = tasks.length;

    const pendingTask = tasks.filter(
        (task) => task.status === "Pending"
    ).length;

    const progressTask = tasks.filter(
        (task) => task.status === "In Progress"
    ).length;

    const completedTask = tasks.filter(
        (task) => task.status === "Completed"
    ).length;

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-4 bg-gray-100">
                <Header
                    totalTask={totalTask}
                    pendingTask={pendingTask}
                    progressTask={progressTask}
                    completedTask={completedTask}

                />
                <div>
                    <Search />
                </div>

                <Table tasks={tasks} />

            </main>
        </div>
    )
}