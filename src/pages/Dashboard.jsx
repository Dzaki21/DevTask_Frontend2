import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Table from "../components/Table";

export default function Dashboard() {

    return(
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 p-4 bg-gray-100">   
            <Header />

             <div>
                <Search/>
             </div>

             <div>
                <Table/>
             </div>

            </main>
        </div>
    )
}