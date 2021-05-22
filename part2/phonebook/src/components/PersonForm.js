import React from "react";

const PersonForm = ({
	handleSubmit,
	nameValue,
	numberValue,
	handleNameInput,
	handleNumberInput,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className="name-input">
				<label htmlFor="name">Name:</label>
				<br />
				<input type="text" value={nameValue} onChange={handleNameInput} />
			</div>
			<br />
			<div className="number-input">
				<label htmlFor="number">Phone Number:</label>
				<br />
				<input type="text" value={numberValue} onChange={handleNumberInput} />
			</div>
			<br />
			<button type="submit">add</button>
		</form>
	);
};

export default PersonForm;
