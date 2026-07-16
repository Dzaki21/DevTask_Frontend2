

export default function Card({ title, total, color }) {
    return (
        <div className="bg-black/75 rounded-2xl p-5  flex-1 relative">

            <div className="absolute top-4 right-4 w-3 h-3 rounded-full" style={{backgroundColor: color}}>
            </div>

            <p className="text-white text-sm font-semibold uppercase">
                {title}
            </p>

            <h2 className="text-white text-5xl font-bold mt-3">
                {total}
            </h2>


        </div>
    )
}