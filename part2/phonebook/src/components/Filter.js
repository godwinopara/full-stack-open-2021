import React from "react";

const Filter = ({ handleFilter }) => {
	return (
		<>
			<label htmlFor="name">Filter shown with:</label>
			<br />
			<input type="text" onChange={handleFilter} />
		</>
	);
};

export default Filter;
