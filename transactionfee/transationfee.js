//declaring variables
let input;
let amount;

function estimateTransactionFee(amountToSend) {
  // Calculate transaction fee
  let fee = amountToSend * 0.015;

  // Enforcing min KES 10 and max KES 70
  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  // Total amount to be debited
  const total = amountToSend + fee;

  // output
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("     ");
  console.log("Send Money Securely!");
}

// input
input = prompt("Unatuma Ngapi? (KES):");
amount = parseInt(input);

//calling the function
estimateTransactionFee(amount);
