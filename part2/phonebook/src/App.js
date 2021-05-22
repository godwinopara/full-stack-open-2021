import React, { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import services from "./components/Services";
import Message from "./components/Message";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [displayPhoneBook, setdisplayPhoneBook] = useState([]);
	const [errorMessage, seterrorMessage] = useState(null);
	const [errorColor, seterrorColor] = useState("");

	useEffect(() => {
		services.getAll().then((data) => {
			setPersons(data);
		});
	}, []);

	useEffect(() => {
		setdisplayPhoneBook(persons);
	}, [persons]);

	const handleNumberInput = (e) => {
		setNewNumber(e.target.value);
	};

	const handleNameInput = (e) => {
		setNewName(e.target.value);
	};

	const displayMessage = (message, color) => {
		seterrorMessage(message);
		seterrorColor(color);

		setTimeout(() => {
			seterrorMessage(null);
			seterrorColor(null);
		}, 3000);
	};

	const handleDelete = (e) => {
		const id = Number(e.target.id);
		const confirmDeletePerson = persons.find((person) => person.id === id);

		if (window.confirm(`Delete ${confirmDeletePerson.name}`)) {
			services
				.deleteContact(id)
				.then(() => {
					setPersons(persons.filter((person) => person.id !== id));

					const message = `Deleted ${confirmDeletePerson.name} from PhoneBook`;
					const color = "green";
					displayMessage(message, color);
				})
				.catch(() => {
					const message = `${confirmDeletePerson.name} has already been removed from server`;
					const color = "red";
					displayMessage(message, color);
				});
		}
	};

	const handleFilter = (e) => {
		const value = e.target.value.toUpperCase();
		if (value.length > 0) {
			const found = displayPhoneBook.filter((person) =>
				person.name.toUpperCase().includes(value)
			);
			setdisplayPhoneBook(found);
		} else if (value.length <= 0) {
			setdisplayPhoneBook(persons);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = { name: newName, number: newNumber };
		const checkDuplicateName = persons.find(
			(person) => person.name.toLowerCase() === newName.toLowerCase()
		);
		const checkDuplicateNumber = persons.find(
			(person) => person.name === newName && person.number !== newNumber
		);

		if (checkDuplicateNumber) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace old number with new one`
				)
			) {
				const personToUpdate = persons.find((contact) => contact.name === newName);

				const updatePerson = { ...personToUpdate, number: newNumber };

				services.updateContact(updatePerson.id, updatePerson).then((updatedPerson) => {
					setPersons(
						persons.map((person) =>
							person.id !== updatePerson.id ? person : updatedPerson
						)
					);
				});
			}
		} else if (checkDuplicateName) {
			window.confirm(`${newName} is already added to phonebook`);
		} else {
			services.addNewContact(newContact).then((newContact) => {
				setPersons(persons.concat(newContact));
				setdisplayPhoneBook(persons);
				setNewName("");
				setNewNumber("");
				const message = `Added ${newName} to phonebook`;
				const color = "green";
				displayMessage(message, color);
			});
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter handleFilter={handleFilter} />
			<Message message={errorMessage} color={errorColor} />
			<h3>Add a new</h3>
			<PersonForm
				handleSubmit={handleSubmit}
				nameValue={newName}
				numberValue={newNumber}
				handleNameInput={handleNameInput}
				handleNumberInput={handleNumberInput}
			/>
			<h3>Numbers</h3>
			<Persons persons={displayPhoneBook} handleDelete={handleDelete} />
		</div>
	);
};

export default App;
