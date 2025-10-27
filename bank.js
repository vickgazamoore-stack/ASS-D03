// const bankName = "first Bank Nigeria"
// const customerAccounts = [
//   {
//     accountNumber: 3111915650, accountName: "gaza", balance: 50000, accountType: savings
//   },

//   {
//     accountNumber: 3111915651, accountName: "gaza", balance: 50000, accountType: savings
//   },

//   {
//     accountNumber: 3111915652, accountName: "gaza", balance: 50000, accountType: savings
//   },

//   {
//     accountNumber: 3111915653, accountName: "gaza", balance: 50000, accountType: savings
//   },

//   {
//     accountNumber: 3111915654, accountName: "gaza", balance: 50000, accountType: savings
//   },

//   {
//     accountNumber: 3111915655, accountName: "gaza", balance: 50000, accountType: savings
//   },
// ]

// Global Variable
const bankName = "GAZABANK";

// 1. Data Structure: Array of Customer Account Objects
let customerAccounts = [
  {
    accountNumber: 3111915650,
    accountName: "EKEATOR VICTOR UZOMA",
    balance: 90300.75,
    type: "Savings"
  },
  {
    accountNumber: 3111915651,
    accountName: "John Okafor",
    balance: 700890.12,
    type: "Current"
  },
  {
    accountNumber: 3111915652,
    accountName: "EMMANUEL NDUKA",
    balance: 928340.50,
    type: "Savings"
  },
  {
    accountNumber: 3111915653,
    accountName: "EMEKA OKORIE",
    balance: 368900.75,
    type: "Savings"
  },
  {
    accountNumber: 3111915654,
    accountName: "CHINEDU NWOSU",
    balance: 865400.0,
    type: "Current"
  },
  {
    accountNumber: 3111915655,
    accountName: "SOLOMON IBE",
    balance: 54300.0,
    type: "Savings"
  },
  {
    accountNumber: 3111915656,
    accountName: "JAMES ONWUKA",
    balance: 870553.25,
    type: "Savings"
  },
  {
    accountNumber: 3111915657,
    accountName: "AMAKA EZE",
    balance: 165425.12,
    type: "Savings"
  },
];

// 2. Core Functions

// Function to check balance
function checkBalance(accountNumber) {
  const account = customerAccounts.find(acc => acc.accountNumber === accountNumber);
  if (account) {
    console.log(`Account Holder: ${account.accountName} | Balance: ₦${account.balance.toFixed(2)}`);
  } else {
    console.log(`Account with NUMBER ${accountNumber} not found.`);
  }
}

// Function to deposit money
function deposit(accountNumber, amount) {
  const account = customerAccounts.find(acc => acc.accountNumber === accountNumber);
  if (account) {
    if (amount > 0) {
      account.balance += amount;
      console.log(
        `Deposit successful! ₦${amount.toFixed(2)} added to ${account.accountName}'s account at ${bankName}.`
      );
    } else {
      console.log("Deposit amount must be positive.");
    }
  } else {
    console.log(`Account with NUMBER ${accountNumber} not found.`);
  }
}

// Function to withdraw money
function withdraw(accountNumber, amount) {
  const account = customerAccounts.find(acc => acc.accountNumber === accountNumber);
  if (account) {
    const feeRate = 0.01; // Local variable
    const fee = amount * feeRate;

    if (amount + fee <= account.balance) {
      account.balance -= (amount + fee);
      console.log(
        `Withdrawal successful! ₦${amount.toFixed(2)} withdrawn from ${account.accountName}'s account.`
      );
      console.log(`Transaction fee: ₦${fee.toFixed(2)} (feeRate = ${feeRate})`);
    } else {
      console.log(
        `Insufficient funds! ${account.accountName} has only ₦${account.balance.toFixed(2)}.`
      );
    }
  } else {
    console.log(`Account with NUMBER ${accountNumber} not found.`);
  }
}

// 3. Execution Sequence

console.log("====== INITIAL BALANCES ======");
checkBalance(3111915650); // EKEATOR VICTOR
checkBalance(3111915651); // JOHN OKAFOR

console.log("\n====== DEPOSIT TRANSACTION ======");
deposit(3111915650, 20000); // Deposit ₦20,000 into Victor’s account

console.log("\n====== WITHDRAWAL (SUCCESS) ======");
withdraw(3111915650, 5000); // Withdraw ₦5,000 from Victor’s account

console.log("\n====== WITHDRAWAL (FAILURE) ======");
withdraw(3111915651, 2000000); // Try withdrawing ₦2,000,000 from John’s account

console.log("\n====== FINAL BALANCES ======");
checkBalance(3111915650);
checkBalance(3111915651);

console.log("\n====== SCOPE CHECK ======");
try {
  console.log(feeRate); // Should throw an error since feeRate is locally scoped
} catch (error) {
  console.log("Error: feeRate is not accessible outside withdraw() function (local scope confirmed).");
}
