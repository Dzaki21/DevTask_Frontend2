import Card from "./Card"

export default function Header({
    totalTask,
    pendingTask,
    progressTask, 
    completedTask,
}) {
    return (
        <div className="grid grid-cols-4 gap-5">
            <Card
                title="ALL TASKS"
                total={totalTask}
                color="#D9D9D9"
            />

             <Card
                title="PENDING"
                total={pendingTask}
                color="#EFD22D"
            />

             <Card
                title="IN PROGRESS"
                total={progressTask}
                color="#279ED1"
            />

             <Card
                title="COMPLETED"
                total={completedTask}
                color="#2ABE4C"
            />
        </div>
    )
}