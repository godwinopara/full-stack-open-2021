import React, { useState } from "react";

const DisplayAnecdotes = ({ anecdotes, vote }) => {
	return (
		<div>
			<p>{anecdotes}</p>
			<p>has {vote} votes</p>
		</div>
	);
};

function App() {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	];
	const [selected, setSelected] = useState(0);
	const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
	const [highVote, setHighVote] = useState(0);

	const handleClick = () => {
		const random = Math.floor(Math.random() * anecdotes.length);
		setSelected(random);
	};

	const handleVote = () => {
		const newVote = [...vote];
		newVote[selected] += 1;
		setVote(newVote);
		setHighVote(newVote.indexOf(Math.max(...newVote)));
	};

	return (
		<div className="App">
			<h1>Anecode of the day</h1>
			<DisplayAnecdotes anecdotes={anecdotes[selected]} vote={vote[selected]} />
			<br />
			<button onClick={handleVote}>Vote</button>
			<button onClick={handleClick}>Next Anecdote</button>

			<h1>Anecode with the highest vote</h1>
			<DisplayAnecdotes anecdotes={anecdotes[highVote]} vote={vote[highVote]} />
		</div>
	);
}

export default App;
