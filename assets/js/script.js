// user input data
const nameInput = document.getElementById('modal-name');
const salaryInput = document.getElementById('modal-salary');
const budgetGoalInput = document.getElementById('budget-goal');
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

// MODAL
// store user's name and salary
submitModal.addEventListener('click', function(event) {
  event.preventDefault();

  const userData = {
    name: nameInput.value,
    salary: salaryInput.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
})

//FORM & LOCAL STORAGE
// update and store expenses to local storage

document.getElementById('submit-form').addEventListener('click', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the current expenses from local storage
    let currentExpenses = JSON.parse(localStorage.getItem('currentExpenses')) || {
        entertainment: 0,
        foodDrink: 0,
        housing: 0,
        insurance: 0,
        loanPayment: 0,
        transportation: 0,
        utilities: 0,
        other: 0,
    };

    // Update the current expenses with the user's input
    currentExpenses.entertainment += parseFloat(entertainmentInput.value) || 0;
    currentExpenses.foodDrink += parseFloat(foodDrinkInput.value) || 0;
    currentExpenses.housing += parseFloat(housingInput.value) || 0;
    currentExpenses.insurance += parseFloat(insuranceInput.value) || 0;
    currentExpenses.loanPayment += parseFloat(loanPaymentInput.value) || 0;
    currentExpenses.transportation += parseFloat(transportationInput.value) || 0;
    currentExpenses.utilities += parseFloat(utilitiesInput.value) || 0;
    currentExpenses.other += parseFloat(otherInput.value) || 0;

    // Save the updated expenses to local storage
    localStorage.setItem('currentExpenses', JSON.stringify(currentExpenses));

    alert('Your expenses have been saved!');
});

// Table Creation
const expenses = JSON.parse(localStorage.getItem('currentExpenses'));

if (!expenses) {
  console.log('No expenses stored.');
} else {
  const table = document.createElement('table');

  const headerRow = document.createElement('tr');
  const categoryHeader = document.createElement('th');
  categoryHeader.textContent = 'Category';
  const amountHeader = document.createElement('th');
  amountHeader.textContent = 'Amount';
  headerRow.appendChild(categoryHeader);
  headerRow.appendChild(amountHeader);
  table.appendChild(headerRow);

  for (const [category, amount] of Object.entries(expenses)) {
    const row = document.createElement('tr');
    const categoryCell = document.createElement('td');
    categoryCell.textContent = category;
    const amountCell = document.createElement('td');
    amountCell.textContent = amount;
    row.appendChild(categoryCell);
    row.appendChild(amountCell);
    table.appendChild(row);
  }

  document.getElementById('expensesTableContainer').appendChild(table);
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