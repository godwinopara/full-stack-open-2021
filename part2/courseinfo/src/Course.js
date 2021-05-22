import React from "react";

const Header = ({ courseTitle }) => {
	return <h1>{courseTitle.name}</h1>;
};

const Total = ({ courseValues }) => {
	const sum = courseValues.reduce((acc, course) => acc + course.exercises, 0);
	return <p>Total of exercises {sum}</p>;
};

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	);
};

const CourseParts = ({ courseParts }) => {
	const parts = courseParts.map((part) => {
		return <Part key={part.id} part={part} />;
	});
	return <div>{parts}</div>;
};

const Course = ({ course }) => {
	return (
		<>
			<Header courseTitle={course} />
			<CourseParts courseParts={course.parts} />
			<Total courseValues={course.parts} />
		</>
	);
};

export default Course;
