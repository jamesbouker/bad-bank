require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO;
mongoose.connect(uri + "/stage"); // /prod for production

const { Schema } = mongoose;

const accountSchema = new Schema({
  id: mongoose.ObjectId,
  name: String,
  email: String,
  password: String,
  balance: Number,
});
const Account = mongoose.model("Account", accountSchema);

function convert(a) {
  return { email: a.email, id: a._id, name: a.name, balance: a.balance };
}

function signup(name, email, password, callback) {
  const account = new Account({ name, email, password });
  account.save(function (err) {
    if (err) return callback(null, err);
    callback(convert(account), null);
  });
}

function login(email, password, callback) {
  Account.findOne({ email, password }, function (err, account) {
    if (err) return callback(null, err);
    callback(convert(account), null);
  });
}

async function allAccounts(callback) {
  let accounts = null;
  try {
    accounts = await Account.find({});
  } catch (err) {
    return callback(null, err);
  }
  callback(accounts.map(convert), null);
}

async function deposit(id, amount, callback) {
  let account = null;
  try {
    account = await Account.findById(id);
    if (account && amount > 0) {
      account.balance += amount;
      await account.save();
    }
  } catch (err) {
    return callback(null, err);
  }
  callback(convert(account), null);
}

async function withdraw(id, amount, callback) {
  let account = null;
  try {
    account = await Account.findById(id);
    if (account && amount > 0 && amount <= account.balance) {
      account.balance -= amount;
      await account.save();
    }
  } catch (err) {
    return callback(null, err);
  }
  callback(convert(account), null);
}

module.exports = { login, signup, allAccounts, deposit, withdraw };
