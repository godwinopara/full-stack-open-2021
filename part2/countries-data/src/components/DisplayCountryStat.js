import React from "react";
import Weather from "./Weather";

const DisplayCountryStat = ({ country, weatherDetails }) => {
	const countryLanguages = country.languages.map((languages, index) => {
		return <li key={index}>{languages.name}</li>;
	});

	return (
		<div>
			<h1>{country.name}</h1>
			<p>{country.capital}</p>
			<p>{country.population}</p>
			<h2>Languages</h2>
			<>{countryLanguages}</>
			<img src={country.flag} alt="flag" />
			<Weather city={country.capital} />
		</div>
	);
};

export default DisplayCountryStat;
