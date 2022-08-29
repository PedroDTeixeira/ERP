const submitButton = document.querySelector('#submit');

let accounts = ['0001000']
let accountsBalance = []

// Adding amounts to the object
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const accountCode = document.querySelector('#accCode1').value;
  let jeAmount =  document.querySelector('#journalAmount').value;

  if (!accountCode || !jeAmount) {
    console.log('Account number or amount missing');
  } else {
    if (accounts.includes(accountCode) === true) {    
      const amountAccount = +jeAmount;
      accountsBalance.push(amountAccount);
      console.log(accountsBalance);
      jeAmount = '';
      console.log(summarize());
    } else {
      console.log(`Account ${accountCode} is not in the chart of accounts.`);
    }
  }
})

// Function that summarize the array
function summarize() {
  const initialValue = 0;
  const sumWithInitial = accountsBalance.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue);
  return sumWithInitial;
};