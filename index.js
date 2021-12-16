const refs = {
  form: document.querySelector(".form"),
  operation: document.getElementById("operation"),
  firstNumber: document.getElementById("num1"),
  secondNumber: document.getElementById("num2"),
  resultField: document.getElementById("result"),
};

refs.form.addEventListener("submit", onFormSubmit);

function calculate(op) {
  let result;

  const num1 = Number(refs.firstNumber.value);
  const num2 = Number(refs.secondNumber.value);

  switch (op) {
    case "plus":
      return (result = num1 + num2);
    case "minus":
      return (result = num1 - num2);
    case "multiply":
      return (result = num1 * num2);
    case "divide":
      return (result = num1 / num2);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  refs.resultField.textContent = Math.ceil(calculate(refs.operation.value));
  refs.form.reset();
}
