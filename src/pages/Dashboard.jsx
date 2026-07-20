import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { getTasks } from "../services/taskServices";


export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const data = await getTasks(search, status, page);
                setTasks(data.tasks);
                setTotalPages(data.totalPages)
            } catch (error) {
                console.error(error)
            }
        }
        fetchTasks();
    }, [search, status, page])

    useEffect(() => {
        setPage(1);
    }, [search, status]);

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

            <main className="flex-1 p-2 bg-gray-100">
                <Header
                    totalTask={totalTask}
                    pendingTask={pendingTask}
                    progressTask={progressTask}
                    completedTask={completedTask}

                />
                <div>
                    <Search
                        value={search}
                        onChange={setSearch}
                        status={status}
                        setStatus={setStatus}

                    />
                </div>

                <Table
                    tasks={tasks}
                    setTasks={setTasks}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />

            </main>
        </div>
    )
}