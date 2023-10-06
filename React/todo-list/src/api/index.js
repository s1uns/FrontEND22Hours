import axios from "axios";

const BASE_URL = 'localhost';

export const ENDPOINTS = {
    USER: 'User',
    TASK: 'Task'
}

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';

    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.update(id, updatedRecord),
        delete : id => axios.delete(url + id)
    }
}

