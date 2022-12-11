const submitButton = document.querySelector('#submit');
const clearButton = document.querySelector('#clearSubmit');
const accountCode1 = document.querySelector('#accCode1').value;
const accountCode2 = document.querySelector('#accCode2').value;
const journalInformation = document.querySelectorAll('#accCode1, #accDesc, #journalAmount, #accCode2, #accDesc, #journalAmount2');

let accounts = ['0001000']
let accountsBalance = []
let voucherNumber = 0

// Adding amounts to the object
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const accountCode1 = document.querySelector('#accCode1').value;
  const accountCode2 = document.querySelector('#accCode2').value;
  let jeAmount1 = +document.getElementById('journalAmount').value;
  let jeAmount2 = +document.getElementById('journalAmount2').value;
  if (checkJournalNetZero() != 'JE not zero') {
    if (!accountCode1 || !accountCode2 || !jeAmount1 || !jeAmount2) {
      console.log('Account number or amount missing');
    } else {
      if (accounts.includes(accountCode1) === true) {
        accountsBalance.push(jeAmount1);
        console.log(accountsBalance);
        console.log(summarize());
        addElement();
        clearJournalFields();
      } else {
        console.log(`Account ${accountCode1} or ${accountCode2} is not in the chart of accounts.`);
      }
    }
  } else (alert('Journal entry is not zero'));
})

// Function that summarize the array
function summarize() {
  const initialValue = 0;
  const sumWithInitial = accountsBalance.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue);
  return sumWithInitial;
};

// What: Creates the journal entry details Why: All record history must to stored for accounting and analysis purposes
function addElement() {
  // adding a unit to the voucher number
  voucherNumber += 1

  // create a new div element
  const newDiv1 = document.createElement("li");
  const newDiv2 = document.createElement("li");

  // and give it some content
  const accountCode1 = document.querySelector('#accCode1').value;
  const accountCode2 = document.querySelector('#accCode2').value;
  let jeAmount1 = +document.getElementById('journalAmount').value;
  let jeAmount2 = +document.getElementById('journalAmount2').value;
  const newContent1 = document.createTextNode(`Account ${accountCode1} Amount ${jeAmount1} ${voucherNumber}`);
  const newContent2 = document.createTextNode(`Account ${accountCode2} Amount ${jeAmount2} ${voucherNumber}`);

  // add the text node to the newly created li
  newDiv1.appendChild(newContent1);
  newDiv2.appendChild(newContent2);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("ulList");
  const currentDiv2 = document.getElementById("ulList2");
  currentDiv.insertBefore(newDiv1, currentDiv2);
  currentDiv.insertBefore(newDiv2, currentDiv2);
}

// Checking if amounts are equal to zero (debits and credits have to net to zero)
function checkJournalNetZero() {
  let jeAmount1 = +document.getElementById('journalAmount').value;
  let jeAmount2 = +document.getElementById('journalAmount2').value;
  if (jeAmount1 + jeAmount2 != 0) {
    return 'JE not zero';
  }
}

// Clear the fields in order to add another journal entry or to correct mistakes
clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearJournalFields();
})

function clearJournalFields() {
  journalInformation.forEach(journalInformation => {
    journalInformation.value = ''
  })
}