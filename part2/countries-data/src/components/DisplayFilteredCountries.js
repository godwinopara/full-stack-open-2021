import React from "react";

const DisplayFilterdCountries = ({ countries, handleShowCountryStat }) => {
	const filteredCountries = countries.map((country, index) => {
		return (
			<li key={index}>
				{country.name}
				<button id={country.name} onClick={handleShowCountryStat}>
					show
				</button>
			</li>
		);
	});
	return <>{filteredCountries}</>;
};

export default DisplayFilterdCountries;
