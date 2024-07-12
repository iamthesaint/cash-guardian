// user input data
const nameInput = document.getElementById('modal-name');
const salaryInput = document.getElementById('modal-salary');
// const budgetGoalInput = document.getElementById('budget-goal');
const foodDrinkInput = document.getElementById('food-and-drink');
const housingInput = document.getElementById('housing');
const insuranceInput = document.getElementById('insurance');
const loanPaymentInput = document.getElementById('loan-payments');
const transportationInput = document.getElementById('transportation');
const utilitiesInput = document.getElementById('utilities');
const entertainmentInput = document.getElementById('entertainment');
const otherInput = document.getElementById('other');
const submitExpenses = document.getElementById('submit-form');
const submitModal = document.getElementById('submit-modal');

// store user's name and salary
submitModal.addEventListener('click', function(event) {
  event.preventDefault();

  const userData = {
    name: nameInput.value,
    salary: salaryInput.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
})

// update and store expenses to local storage
submitExpenses.addEventListener('click', function (event) {
  event.preventDefault();

  // initialize expenses at 0 if there is no prior user data
  if (!localStorage.getItem('userData')) {
    const expenses = {
      foodDrink: 0,
      housing: 0,
      insurance: 0,
      loanPayment: 0,
      transportation: 0,
      utilities: 0,
      entertainment: 0,
      other: 0,
    }
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
  
  // update stored expense data with new input values
  const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
  const expenses = {
    foodDrink: updateValue(storedExpenses.foodDrink, foodDrinkInput.value),
    housing: updateValue(storedExpenses.housing, housingInput.value),
    insurance: updateValue(storedExpenses.insurance, insuranceInput.value),
    loanPayment: updateValue(storedExpenses.loanPayment, loanPaymentInput.value),
    transportation: updateValue(storedExpenses.transportation, transportationInput.value),
    utilities: updateValue(storedExpenses.utilities, utilitiesInput.value),
    entertainment: updateValue(storedExpenses.entertainment, entertainmentInput.value),
    other: updateValue(storedExpenses.other, otherInput.value),
  }
  localStorage.setItem('expenses', JSON.stringify(expenses));

  calcBudget();
}) 


// calculate budget
function calcBudget() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const expenses = JSON.parse(localStorage.getItem('expenses'))
  let budgetRemaining = userData.salary;

  for (const value in expenses) {
    budgetRemaining -= expenses[value];
  }
}

function updateValue(total, value) {
  if (value === "" || value === 0) {
    return 0;
  }
  else {
    return Number(total) + Number(value);
  }
}

function displayEntertainment() {
  var checkBox = document.getElementById("entertainment-check");
  var text = document.getElementById("entertainment");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function displayFoodDrink() {
  var checkBox = document.getElementById("food-and-drink-check");
  var text = document.getElementById("food-and-drink");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function displayHousing() {
  var checkBox = document.getElementById("housing-check");
  var text = document.getElementById("housing");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function displayInsurance() {
  var checkBox = document.getElementById("insurance-check");
  var text = document.getElementById("insurance");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function displayLoanPayments() {
  var checkBox = document.getElementById("loan-payments-check");
  var text = document.getElementById("loan-payments");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function displayTransportation() {
  var checkBox = document.getElementById("transportation-check");
  var text = document.getElementById("transportation");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function displayUtilities() {
  var checkBox = document.getElementById("utilities-check");
  var text = document.getElementById("utilities");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function displayOther() {
  var checkBox = document.getElementById("other-check");
  var text = document.getElementById("other");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
