import axios from "axios";

const url = "http://localhost:3004/persons";

const getAll = () => {
	const request = axios.get(url);
	return request.then((phoneBook) => phoneBook.data);
};

const addNewContact = (newContact) => {
	const request = axios.post(url, newContact);
	return request.then((phoneBook) => phoneBook.data);
};

const updateContact = (id, newContact) => {
	const request = axios.put(`${url}/${id}`, newContact);
	return request.then((phoneBook) => phoneBook.data);
};

const deleteContact = (id, contact) => {
	const request = axios.delete(`${url}/${id}`, contact);
	return request.then((phoneBook) => phoneBook.data);
};
const services = { getAll, addNewContact, updateContact, deleteContact };
export default services;
