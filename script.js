const submitButton = document.querySelector('#submit');
const amountAccount = document.querySelector('#accCode1').value;

let accounts = {account: 1}
console.log(amountAccount)
// Adding amounts to the object attempt
submitButton.addEventListener('click', () => {
    accounts.account = accounts.account + amountAccount || 1;
    console.log(accounts.account)
    document.querySelector('#accCode1').value = ''
})