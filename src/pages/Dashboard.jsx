import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { getTasks } from "../services/taskServices";


export default function Dashboard() {

    function executeProtectedAction(callback) {
        const token = localStorage.getItem('token');

        if(!token) {
            alert('Anda harus login terlebih dahulu');
            window.location.href = 'Login.jsx';
            return;
        }

        callback();

        document.addEventListener('DOMContentLoaded', () => {
            loadTasks();

            const btnTambah = document.getElementById('btnTambah');
            if (btnTambah) {
                btnTambah.addEventListener('click', () => {
                    executeProtectedAction(() =>(
                        openModalTambah()
                    ));
                });
            }
        });
    }

    const [sumary, setSumary] = useState({
        totalTask: 0,
        pendingTask: 0,
        progressTask: 0,
        completedTask: 0,
    })

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
                setTotalPages(data.totalPages);


                setSumary({
                    totalTask: data.totalTasks,
                    pendingTask: data.pendingTasks,
                    progressTask: data.progressTasks,
                    completedTask: data.completedTasks,
                })
            } catch (error) {
                console.error(error)
            }
        }
        fetchTasks();
    }, [search, status, page])

    useEffect(() => {
        setPage(1);
    }, [search, status]);



    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-2 bg-gray-100">
                <Header
                    totalTask={sumary.totalTask}
                    pendingTask={sumary.pendingTask}
                    progressTask={sumary.progressTask}
                    completedTask={sumary.completedTask}

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