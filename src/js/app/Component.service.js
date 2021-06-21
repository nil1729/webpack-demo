class ComponentService {
	constructor() {
		this.firstNumber = document.getElementById('first-number');
		this.secondNumber = document.getElementById('second-number');
		this.additionForm = document.getElementById('addition-form');
		this.result = document.getElementById('result');
	}

	getInputs() {
		return [this.firstNumber.value, this.secondNumber.value];
	}

	setResult(value) {
		this.result.textContent = value;
	}

	onClick(cb) {
		this.additionForm.addEventListener('submit', cb);
	}

	clearInput() {
		this.firstNumber.value = '';
		this.secondNumber.value = '';
	}
}

export default ComponentService;
