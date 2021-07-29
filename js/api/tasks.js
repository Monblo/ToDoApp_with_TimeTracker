import { API_KEY, API_URL } from "./constants";

export const getTasks = (successCallback) => {
    fetch(`${API_URL}/tasks`, {
        headers: {
            "Authorization": API_KEY,
        },
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch((err) => console.log(err));
};

export const postTasks = (task, successCallback) => {
    fetch(`${API_URL}/tasks`, {
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(task),
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch((err) => console.log(err));
};

export const deleteTasks = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}`, {
        headers: {
            "Authorization": API_KEY
        },
        method: 'DELETE'
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback();
            }
        })
        .catch((err) => console.log(err));
};

export const getOperations = (id, successCallback) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
            "Authorization": API_KEY,
        },
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch((err) => console.log(err));
};
