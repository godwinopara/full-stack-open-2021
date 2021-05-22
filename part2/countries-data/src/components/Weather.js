import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
	const api = process.env.REACT_APP_WEATHER_API_KEY;
	const [temperature, settemperature] = useState(null);
	const [windSpeed, setwindSpeed] = useState(null);
	const [imgUrl, setimgUrl] = useState("");
	const [windDirection, setwindDirection] = useState("");

	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=${api}&query=${city}&unit=m`)
			.then((response) => {
				settemperature(response.data.current.temperature);
				setwindSpeed(response.data.current.wind_speed);
				setimgUrl(response.data.current.weather_icons[0]);
				setwindDirection(response.data.current.wind_dir);
			});
	}, [api, city]);

	return (
		<div>
			<h2>Weather in {city}</h2>
			<p>
				<strong>temperature: </strong>
				{`${temperature} Celcius`}
			</p>
			<img src={imgUrl} alt="weather condition" />
			<p>
				<strong>Wind: </strong>
				{`${windSpeed} mph direction ${windDirection}`}
			</p>
		</div>
	);
};

export default Weather;
