export default function DeleteModal({
  isOpen,
  onClose,
  onDelete,
  taskTitle,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[420px] p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">
          Delete this task?
        </h2>

        <p className="text-gray-600 mb-8">
          "<span className="font-semibold">{taskTitle}</span>" will be removed
          from the ledger. This can't be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            Keep it
          </button>

          <button
            onClick={onDelete}
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Delete task
          </button>
        </div>
      </div>
    </div>
  );
}