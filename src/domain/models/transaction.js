class Transaction {
    constructor(id, userId, amount, category, description, date) {
      this.id = id;
      this.userId = userId;
      this.amount = amount;
      this.category = category;
      this.description = description;
      this.date = date;
    }
  }
  
  module.exports = Transaction;
  