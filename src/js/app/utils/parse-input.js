const parseInputs = (...inputs) => {
	return inputs.map((input) => parseInt(input) && Number(input));
};

export default parseInputs;
