const Filter = ({ handleFilter, filterInput }) => {
	return (
		<div>
			<label htmlFor="name">Find Countries:</label>
			<br />
			<input type="text" value={filterInput} onChange={handleFilter} />
		</div>
	);
};

export default Filter;
