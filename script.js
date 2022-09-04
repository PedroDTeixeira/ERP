const submitButton = document.querySelector('#submit');
const clearButton = document.querySelector('#clearSubmit');
const journalInformation = document.querySelectorAll('#accCode1, #accDesc, #journalAmount, #accCode, #accDesc, #journalAmount2');
const accountCode1 = document.querySelector('#accCode1').value;
const accountCode2 = document.querySelector('#accCode2').value;

let accounts = ['0001000']
let accountsBalance = []

// Adding amounts to the object
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let jeAmount1 = +document.getElementById('journalAmount').value;
  let jeAmount2 = +document.getElementById('journalAmount2').value;
  if (checkJournalNetZero() != 'JE not zero') {
    if (!accountCode1 ||!accountCode2 || !jeAmount1 || !jeAmount2) {
      console.log('Account number or amount missing');
    } else {
      if (accounts.includes(accountCode1) === true || accounts.includes(accountCode1) === true) {
        accountsBalance.push(jeAmount1);
        console.log(accountsBalance);
        console.log(summarize());
      } else {
        console.log(`Account ${accountCode1} or ${accountCode2} is not in the chart of accounts.`);
      }
    }
  } else (alert('Journal entry is not zero'));
  addElement();
})

// Function that summarize the array
function summarize() {
  const initialValue = 0;
  const sumWithInitial = accountsBalance.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue);
  return sumWithInitial;
};

function addElement() {
  // create a new div element
  const newDiv = document.createElement("li");

  // and give it some content
  let jeAmount1 = +document.getElementById('journalAmount').value;
  let jeAmount2 = +document.getElementById('journalAmount2').value;
  const newContent = document.createTextNode(`${jeAmount1} ${accountCode1}`);

  // add the text node to the newly created li
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("ulList");
  const currentDiv2 = document.getElementById("ulList2");
  currentDiv.insertBefore(newDiv, currentDiv2);
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
  journalInformation.forEach(journalInformation => {
    journalInformation.value = ''
  })
})
