class AlertService {
	constructor() {
		this.alertBox = document.getElementById('alert-box');
		this.closeButton = document.getElementById('alert-close-btn');
		this.alertMessage = document.getElementById('alert-message');
	}

	showErrorAlert(inputs, numbers) {
		const fullMessage = inputs.reduce((message, str, index) => {
			if (inputsAreValid(numbers[index])) {
				return message + '';
			} else {
				return message + `"${str}" is not a number. `;
			}
		}, 'Please enter two valid numbers! ');

		this.alertBox.classList.add('show');
		this.alertMessage.textContent = fullMessage;
	}

	hideErrors() {
		this.alertBox.classList.remove('show');
	}
}
