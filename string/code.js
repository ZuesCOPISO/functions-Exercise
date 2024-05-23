function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function multiply(a, b) {
    console.log(a * b);
  }
  
  function tableOfFive(number) {
    const result = number * 5;
    console.log(result);
    return result;
  }
  
  function greetUser() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name) {
      greet(name);
    } else {
      alert("Please enter your name.");
    }
  }
  
  function multiplyNumbers() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)) {
      multiply(num1, num2);
    } else {
      alert("Please enter valid numbers.");
    }
  }
  
  function displayTableOfFive() {
    const numberInput = document.getElementById("numberInput");
    const number = parseFloat(numberInput.value);
    if (!isNaN(number)) {
      const result = tableOfFive(number);
      document.getElementById("result").textContent = `The result is: ${result}`;
    } else {
      alert("Please enter a valid number.");
    }
  }