import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://http://127.0.0.1:8000/',
});

export const api = {
    async getTasks() {
        return apiClient.get('api/tasks/');
    },
    async createTask(task) {
        return apiClient.post('api/tasks/', task);
    },
    async updateTask(task) {
        return apiClient.put(`api/tasks/${task.id}/`, task);
    },
    async deleteTask(task) {
        return apiClient.delete(`api/tasks/${task.id}/`);
    },
    async updateTaskCompletionStatus(task) {
        return apiClient.put(`api/tasks/${task.id}/`, { completed: true });
    },
    async registerUser(user) {
        return apiClient.post('api/auth/register', user);
    },
    async loginUser(user) {
        return apiClient.post('api/auth/login', user);
    },
    async logoutUser() {
        return apiClient.post('api/auth/logout');
    }
};
