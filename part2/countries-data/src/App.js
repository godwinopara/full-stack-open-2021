import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import DisplayCountryStat from "./components/DisplayCountryStat";
import DisplayFilterdCountries from "./components/DisplayFilteredCountries";

const App = () => {
	const [errorMessage, seterrorMessage] = useState("");
	const [countries, setcountries] = useState([]);
	const [filteredCountry, setfilteredCountry] = useState([]);
	const [filterInput, setfilterInput] = useState("");

	useEffect(() => {
		axios
			.get("https://restcountries.eu/rest/v2/all")
			.then((response) => {
				return response;
			})
			.then((countriesData) => {
				setcountries(countriesData.data);
			});
	}, []);

	const handleShowCountryStat = (e) => {
		// DISPLAY THE COUNTRY DETAILS OF THE COUNTRY THE USER  ENTERED IN THE FILTER INPUT

		const filterCountryResult = countries.filter((country) => {
			return country.name.includes(e.target.id);
		});

		const countryStat = <DisplayCountryStat country={filterCountryResult[0]} />;

		setfilteredCountry(countryStat);
	};

	const handleFilter = (e) => {
		const filterInputValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
		setfilterInput(filterInputValue);

		/********SEARCH FOR THE FILTERED VALUE INSIDE FROM THE COUNTRIES GOTTEN FROM THE API
		 *  **********STORED IN THE COUNTRIES USESTATE************* */

		const filterResult = countries.filter((country) => {
			return country.name.includes(filterInputValue);
		});

		/* ************************************************************* */

		/* ***********************************************
		 ****DISPLAY THE COUNTRY THAT THE USER SEARCHED FOR
		 *****************************************************/

		let filteredCountries;

		if (filterResult.length > 10) {
			seterrorMessage("Too many matches, specify another filter");
			setfilteredCountry([]);
		} else {
			seterrorMessage("");
			filteredCountries = (
				<DisplayFilterdCountries
					countries={filterResult}
					handleShowCountryStat={handleShowCountryStat}
				/>
			);
			setfilteredCountry(filteredCountries);
		}
	};

	return (
		<div>
			<Filter filterInput={filterInput} handleFilter={handleFilter} />
			<p>{errorMessage}</p>
			<>{filteredCountry}</>
		</div>
	);
};

export default App;
