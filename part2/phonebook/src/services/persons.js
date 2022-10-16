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
    return axios.put(`${baseUrl}/${id}`, updatedObject)
    
}

const deleteObject = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.status) //delete method returns an empty object so just return the status
} 

export default {getAll, create, update, deleteObject}