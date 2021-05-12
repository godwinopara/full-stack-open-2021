import React, { useEffect, useState } from "react";

/* ********************************************
 ****** Statistic Component to create one Stats***** */

const Statistic = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

// STATISTICS COMPONENT THAT CREATE A STATISTICS WITH THE STATISTIC COMPONENT

const Statistics = ({ good, netural, bad, totalFeedBack, average, percentage }) => {
	if (totalFeedBack) {
		return (
			<table>
				<thead>
					<tr>
						<th>Statistics</th>
					</tr>
				</thead>
				<tbody>
					<Statistic text="good" value={good} />
					<Statistic text="netural" value={netural} />
					<Statistic text="bad" value={bad} />
					<Statistic text="totalFeedBack" value={totalFeedBack} />
					<Statistic text="average" value={average} />
					<Statistic text="percentage" value={percentage + "%"} />
				</tbody>
			</table>
		);
	}
	return <p>No Feedback given</p>;
};

// BUTTON COMPONENT TO CREATE EACH BUTTON ELEMENT

const Button = ({ value, handleClick }) => {
	return <button onClick={handleClick}>{value}</button>;
};

function App() {
	const [good, setGood] = useState(0);
	const [netural, setNetural] = useState(0);
	const [bad, setBad] = useState(0);
	const [totalFeedBack, setTotolFeedBack] = useState(0);
	const [average, setAverage] = useState(0);
	const [positiveFeedBack, setPositiveFeedback] = useState(0);

	useEffect(() => {
		function calcAverage() {
			const feedbackScore = good * 1 + netural * 0 + bad * -1;
			let averageFeedBack = feedbackScore / totalFeedBack;

			return isNaN(averageFeedBack) ? 0 : averageFeedBack;
		}

		function percentPositiveFeedBack() {
			return (good / totalFeedBack) * 100;
		}
		setAverage(calcAverage());
		setPositiveFeedback(percentPositiveFeedBack());
	}, [good, netural, bad, totalFeedBack]);

	const handleClickGood = () => {
		setGood(good + 1);
		setTotolFeedBack(totalFeedBack + 1);
	};

	const handleClickBad = () => {
		setBad(bad + 1);
		setTotolFeedBack(totalFeedBack + 1);
	};

	const handleClickNeutural = () => {
		setNetural(netural + 1);
		setTotolFeedBack(totalFeedBack + 1);
	};
	return (
		<div className="App">
			<h1>Give Feedback</h1>
			<Button value="good" handleClick={handleClickGood} />
			<Button value="netural" handleClick={handleClickNeutural} />
			<Button value="bad" handleClick={handleClickBad} />
			<Statistics
				good={good}
				netural={netural}
				bad={bad}
				totalFeedBack={totalFeedBack}
				average={average}
				percentage={positiveFeedBack}
			/>
		</div>
	);
}

export default App;
