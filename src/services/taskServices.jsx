const API_URL = "http://localhost:3000/api/task";

export async function getTasks() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Gagal mengambil data")
    }

    return response.json();
}

export async function createTask(task) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error("Gagal menambahkan task")
    }
    return response.json();
}

export async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method:"DELETE",
    });

    if (!response.ok){
        throw new Error("Gagal menghapus task");
    }

    return response.json();
}