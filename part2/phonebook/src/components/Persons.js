import React from "react";
import "../index.css";

const Persons = ({ persons, handleDelete }) => {
	const phoneBook = persons.map((person) => {
		return (
			<li key={person.id}>
				<span>{person.name}</span>
				<span>{person.number}</span>

				<button id={person.id} onClick={handleDelete}>
					Delete
				</button>
			</li>
		);
	});
	return <ul>{phoneBook}</ul>;
};

export default Persons;
