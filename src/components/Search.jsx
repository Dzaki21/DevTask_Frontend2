import { Search as SearchIcon} from "lucide-react"

export default function Search() {
    return(
    <div className="bg-white rounded-2xl mt-6 p-4 shadow-sm">

        <div className="flex justify-between items-start">

            <div>
                <p className="text-gray-400 text-sm">Dashboard</p>
                <h2 className="text-2xl font-bold">Overview</h2>
            </div>

            <div className="relative">
                <SearchIcon size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
                />

                <input type="text"
                    placeholder="Search Task" 
                    className="w-full rounded-2xl bg-gray-100 py-3 pl-14 pr-4 outline-none"
                />
            </div>

            <div className="text-right">
                <p className=" text-sm">
                    <span className="font-bold">13</span> task on file
                </p>

                <p className="text-gray-400 text-sm">
                    Jul 13, 2026
                </p>
            </div>
        </div>

        <div className="flex justify-end items-center gap-6 mt-1">
            <p className="text-sm">
                Showing <span className="font-bold">13</span> of 13
            </p>

            <button className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-2x1">
                <select className="bg-transparent outline-none cursor-pointer">
                    <option>All</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
            </button>
        </div>
    </div>
    )
}