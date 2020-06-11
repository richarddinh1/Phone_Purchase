// PHONE PURCHASE CHALLENGE

// variables
const taxRate = 0.08;
const phonePrice = 599;
const accessories = 89;
let bankAccountBalance = parseInt(prompt('Enter imaginary bank account balance', '5000'));
let fixedBank = bankAccountBalance;


// total in money format
function formatGrandTotal(totalAmount) {
    let prettyGrandTotal = `$${totalAmount.toFixed(2)}`
        return prettyGrandTotal;
}


// calculate tax
function getTax(subTotal) {
    let taxAmount = subTotal * taxRate;
    return taxAmount;
}

// calculate total + tax
let nonTaxTotal = phonePrice + accessories;
let grandTotal = getTax(nonTaxTotal) + nonTaxTotal;


// logs # of phones bought, total spent, and bank account balance.
function buyPhones() {

    let phonesPurchased = 0;
    let spentTotal = 0;
    let spendingThreshold = parseInt(prompt('Enter amount you are willing to spend on phones', '3000'));
    while(bankAccountBalance > fixedBank - spendingThreshold) {
        bankAccountBalance = bankAccountBalance - grandTotal;
        phonesPurchased++;
        spentTotal = spentTotal + grandTotal;
    }
    return `Phones Purchased: ${phonesPurchased}
            Total Spent: ${formatGrandTotal(spentTotal)}
            New Bank Account Balance: ${formatGrandTotal(bankAccountBalance)}`
}

let receipt = buyPhones();

let container = document.getElementById('container');

container.append(receipt);