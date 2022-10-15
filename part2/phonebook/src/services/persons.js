import axios from "axios";

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => {
        console.log(response)
        return response.data
    })
}

const create = (newObject) => {
    const request = axios.post(baseUrl,newObject)
    return request.then((response) => {
        console.log(response)
        return response.data
    })
}

const update = (updatedObject, id) => {
    const request = axios.put(`${baseUrl}/${id}`,updatedObject)
    return request.then((response) => {
        console.log(response)
        return response.data
    })
}

export default {getAll, create, update}