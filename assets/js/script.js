// user date
const monthlyIncomeInput = document.querySelector('monthly-income');
const budgetGoalInput = document.querySelector('budget-goal');
const submitButton = document.querySelector('submit');
// TODO Add spending categories 


// store values to local storage
submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        const userData = {
            monthlyIncome: monthlyIncomeInput.value,
            budgetGoal: budgetGoalInput.value,
        }
    
        localStorage.setItem('userData', JSON.stringify(userData));
});


// convert & calc budget
let userData = JSON.parse(localStorage.getItem('userData'));
