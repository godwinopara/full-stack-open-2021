const Message = ({ message, color }) => {
	if (message === null) return null;
	const messageStyle = {
		margin: "0.7rem 0",
		border: `1px solid ${color}`,
		background: `${color}`,
		color: "white",
	};

	return <div style={messageStyle}>{message}</div>;
};

export default Message;
