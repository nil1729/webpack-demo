const inputsAreValid = (...inputs) => {
	return inputs.every((input) => typeof input === 'number' && !isNaN(input));
};

// export default inputsAreValid;
