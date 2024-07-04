document.addEventListener('DOMContentLoaded', function () {
    const showFormButton = document.getElementById('show-form-button');
    const loanForm = document.getElementById('loan-form');
    const loansTable = document.getElementById('loans-table').querySelector('tbody');

    showFormButton.addEventListener('click', function () {
        loanForm.classList.toggle('hidden');
    });

    loanForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        const interestRate = document.getElementById('interest_rate').value;
        const duration = document.getElementById('duration').value;

        const row = loansTable.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = amount;
        row.insertCell(2).textContent = interestRate;
        row.insertCell(3).textContent = duration;

        loanForm.reset();
        loanForm.classList.add('hidden');
    });
});
