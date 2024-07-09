// user input data
const nameInput = document.getElementById('name');
const monthlyIncomeInput = document.getElementById('monthly-income');
const budgetGoalInput = document.getElementById('budget-goal');
const foodDrinkInput = document.getElementById('food-and-drink');
const housingInput = document.getElementById('housing');
const insuranceInput = document.getElementById('insurance');
const loanPaymentInput = document.getElementById('loan-payments');
const transportationInput = document.getElementById('transportation');
// TODO const entertainmentInput = document.getElementById('entertainment');
const otherInput = document.getElementById('other');
const submitButton = document.getElementById('submitButton');


// store values to local storage
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const userData = {
        name: nameInput.value,
        monthlyIncome: monthlyIncomeInput.value,
        budgetGoal: budgetGoalInput.value,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    const expenses = {
        foodDrink: checkValue(foodDrinkInput.value),
        housing: checkValue(housingInput.value),
        insurance: checkValue(insuranceInput.value),
        loanPayment: checkValue(loanPaymentInput.value),
        transportation: checkValue(transportationInput.value),
        // TODO entertainment: checkValue(entertainmentInput.value),
        other: checkValue(otherInput.value),
    }
    localStorage.setItem('expenses', JSON.stringify(expenses));

    calcBudget();
});


// calculate budget
function calcBudget() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const expenses = JSON.parse(localStorage.getItem('expenses'))
    let budgetRemaining = userData.monthlyIncome;

    for (const value in expenses) {
        budgetRemaining -= expenses[value];
    }
    
    // TODO 
}

function checkValue(value) {
    if (value === "") {
        return 0;
    }
    else {
        return value;
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
    var text = document.getElementById("utilites");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
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
function displayOther() {
    var checkBox = document.getElementById("other-check");
    var text = document.getElementById("other");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}