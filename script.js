const submitButton = document.querySelector('#submit');
// const amountAccount = document.querySelector('#accCode1');

let accounts = ['0001000']
let accountsBalance = []

// Adding amounts to the object attempt
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const amountAccount = document.querySelector('#accCode1').value;
    accountsBalance.push(amountAccount);
    console.log(accountsBalance);
    document.querySelector('#accCode1').value = '';
    console.log(sumWithInitial);
})

const initialValue = 0;
const sumWithInitial = accountsBalance.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

