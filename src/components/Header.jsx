import Card from "./Card"

export default function Header() {
    return (
        <div className="grid grid-cols-4 gap-5">
            <Card
                title="ALL TASKS"
                total="15"
                color="#D9D9D9"
            />

             <Card
                title="PENDING"
                total="15"
                color="#EFD22D"
            />

             <Card
                title="IN PROGRESS"
                total="15"
                color="#279ED1"
            />

             <Card
                title="COMPLETED"
                total="15"
                color="#2ABE4C"
            />
        </div>
    )
}