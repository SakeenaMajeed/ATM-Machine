#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 50000; // Dollars
let myPin = 8585;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",

    message: "enter your pin",

    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code !");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);
  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    // =, -= , +=
    myBalance -= amountAnswer.amount;

    console.log("Your remaining balance is :" + myBalance);
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
  } else if (operationAns.operation === "fast cash") {
    let fastCashAnswer = await inquirer.prompt([
      {
        type: "list",
        name: "fastCash",
        message: "select amount",
        choices: ["10000", "20000", "30000", "40000", "50000"],
      },
    ]);
    console.log(`your fast cash amount is ${fastCashAnswer.fastCash}`);
    myBalance = fastCashAnswer.fastCash;
    console.log(`your remainig balance is ${myBalance}`);
  }
} else {
  console.log("Incorrect  pin number");
}
