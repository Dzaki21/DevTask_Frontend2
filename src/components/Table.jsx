import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react"

export default function Table() {
    return(
        <div className="bg-white rounded-3xl mt-4 p-4 shadow-sm">

            <div className=" flex justify-end mb-2">
                <Link
                to="/new-task"
                 className="bg-gray-100 flex px-3 py-3 rounded-2xl font-medium hover:bg-gray-200">
                    <Plus size={20}/>
                    New Task
                </Link>
            </div>

            <div className="grid grid-cols-5 text-gray-500 text-sm font-semibold border-b pb-2">
                <p>TASK</p>
                <p>CATEGORY</p>
                <p>STATUS</p>
                <p>CREATED</p>
                <p className="text-right">ACTIONS</p>
            </div>

            <div className="grid grid-cols-5 items-center py-2 border-b border-gray-500">
                <div>
                    <h3 className="font-semibold text-gray-900">
                        Fix bug on login page
                    </h3>

                    <p className="text-sm text-gray-500">
                        Session token drops on refresh; users bounced to /login
                    </p>
                </div>

                <div>
                    <span className="bg-gray-200 px-3 py-1 rounded-l text-sm font-medium">
                        Frontend
                    </span>
                </div>

                <div>
                    <span className="bg-sky-200 text-sky-700 px-3 py-1 rounded-lg text-sm font-medium">
                        In Progress
                    </span>
                </div>

                <div>
                    <p className="font-medium">Jul 12</p>
                </div>

                <div className="flex justify-end gap-4">
                    <Pencil size={18} className="cursor-pointer"/>
                    <Trash2 size={18} className="cursor-pointer"/>
                </div>
            </div>

             <div className="grid grid-cols-5 items-center py-2 border-b border-gray-500">
                <div>
                    <h3 className="font-semibold text-gray-900">
                        Fix bug on login page
                    </h3>

                    <p className="text-sm text-gray-500">
                        Session token drops on refresh; users bounced to /login
                    </p>
                </div>

                <div>
                    <span className="bg-gray-200 px-3 py-1 rounded-l text-sm font-medium">
                        Frontend
                    </span>
                </div>

                <div>
                    <span className="bg-sky-200 text-sky-700 px-3 py-1 rounded-lg text-sm font-medium">
                        In Progress
                    </span>
                </div>

                <div>
                    <p className="font-medium">Jul 12</p>
                </div>

                <div className="flex justify-end gap-4">
                    <Link to="/edit-task">
                     <Pencil size={18} className="cursor-pointer"/>
                    </Link>
                    <Trash2 size={18} className="cursor-pointer"/>
                </div>
            </div>

            <div className="grid grid-cols-5 items-center py-2 border-b border-gray-500">
                <div>
                    <h3 className="font-semibold text-gray-900">
                        Fix bug on login page
                    </h3>

                    <p className="text-sm text-gray-500">
                        Session token drops on refresh; users bounced to /login
                    </p>
                </div>

                <div>
                    <span className="bg-gray-200 px-3 py-1 rounded-l text-sm font-medium">
                        Frontend
                    </span>
                </div>

                <div>
                    <span className="bg-sky-200 text-sky-700 px-3 py-1 rounded-lg text-sm font-medium">
                        In Progress
                    </span>
                </div>

                <div>
                    <p className="font-medium">Jul 12</p>
                </div>

                <div className="flex justify-end gap-4">
                    <Pencil size={18} className="cursor-pointer"/>
                    <Trash2 size={18} className="cursor-pointer"/>
                </div>
            </div>
            
        </div>
    );
}