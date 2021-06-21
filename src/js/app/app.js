const run = (alertService, componentService) => {
	alertService.hideErrors();

	componentService.onClick((e) => {
		e.preventDefault();

		alertService.hideErrors();
		const inputs = componentService.getInputs();
		const parsedInputs = parseInputs(...inputs);

		if (inputsAreValid(...parsedInputs)) {
			const [numA, numB] = parsedInputs;
			componentService.setResult(numA + numB);
			componentService.clearInput();
		} else {
			componentService.setResult('NaN');
			alertService.showErrorAlert(inputs, parsedInputs);
			alertService.closeButton.addEventListener('click', function () {
				alertService.hideErrors();
			});
		}
	});
};

// export default run;
