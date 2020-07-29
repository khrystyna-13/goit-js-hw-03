"use strict";
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw"
};

const account = {
    balance: 0,
    transactions: [],
    lastId: 0,


    deposit(amount) {
        let transaction = {};
        transaction.id = this.lastId + 1;
        this.lastId += 1;
        transaction.type = Transaction.DEPOSIT;
        transaction.amount = amount;
        this.addTransaction(transaction);
        this.balance += amount;
    },

    withdraw(amount) {
        if (this.balance >= amount) {
            let transaction = {};
            transaction.id = this.lastId + 1;
            this.lastId += 1;
            transaction.type = Transaction.WITHDRAW;
            transaction.amount = amount;
            this.addTransaction(transaction);
            this.balance -= amount;
        } else {
            console.log("Не достатньо коштів на рахунку");
        }
    },

    addTransaction(transaction) {
        this.transactions.push(transaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }
    },

    getTransactionTotal(type) {
        let total = 0;

        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        }

        return total;
    }
};

account.deposit(100);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());

console.log("Transaction 1: ");
console.log(account.getTransactionDetails(1));
console.log("Transaction 3: ");
console.log(account.getTransactionDetails(3));
console.log("Transaction 4: ");
console.log(account.getTransactionDetails(4));

console.log(
    "Withdrawals: " + account.getTransactionTotal(Transaction.WITHDRAW)
);
console.log("Deposits: " + account.getTransactionTotal(Transaction.DEPOSIT));