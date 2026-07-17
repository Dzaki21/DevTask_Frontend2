export default function NewCategory( {
    children, active, onClick

} ) {
    return (
        <button 
        onClick={onClick}
        className={`px-4 py-2 rounded-xl transition ${
            active
            ? "bg-black text-white"
            :"bg-gray-100 hover:bg-gray-200"
        }`}
        >
            {children}
        </button>
    )
}