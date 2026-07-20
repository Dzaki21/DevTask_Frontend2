import { NavLink } from "react-router-dom"
import { LayoutDashboard, Plus } from "lucide-react"

export default function SideBar() {
    return (
        <aside className="w-64 bg-black/75 shadow-md p-6">
            <p className="text-white/70 text-sm font-semibold uppercase">
                IT ENGINEER LEDGER
            </p>
            <h1 className="text-3xl font-bold text-white mt-1">
                DevTask
            </h1>

            <nav className="mt-20 space-y-3">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex gap-3 item-center w-full text-left rounded-xl px-4 py-2 ${isActive
                            ? "bg-black text-white"
                            : "text-white hover:bg-black/30"
                        }`
                    }
                >
                    Overview
                </NavLink>

                <NavLink
                    to="/new-task"
                    className={({ isActive }) =>
                        `flex items-center gap-3 w-full px-4 py-2 rounded-xl ${isActive
                            ? "bg-black text-white"
                            : "text-white hover:bg-black/30"
                        }`
                    }
                >
                    New Task
                </NavLink>

            </nav>

            <div className="mt-10">
                <p className="text-white/70 text-sm font-semibold leading-5">
                    A single-Collection task register
                    <br />
                    for the engineering team.
                </p>
            </div>
        </aside>
    )
}