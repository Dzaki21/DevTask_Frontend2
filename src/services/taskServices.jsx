const API_URL = "http://localhost:3000/api/task";

export async function getTasks(
    search="",
    status = "All",
    page = 1,
    limit = 5
) {
    const response = await fetch
    ( `${API_URL}?search=${encodeURIComponent(search)}&status=${status}&page=${page}&limit=${limit}`
);

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

export async function updateTask(id, taskData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method:"PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(taskData)
    });

    if (!response.ok) {
        throw new Error("Gagal Mengedit task")
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