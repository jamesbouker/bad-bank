const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// our modules
const dal = require("./dal");

const app = express();
const port = 5001;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/../client/build")));

app.get("/createaccount", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
app.get("/withdraw", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
app.get("/deposit", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
app.get("/balance", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
app.get("/debug", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
app.get("/account/all", (req, res) => {
  dal.allAccounts((accounts) => {
    res.send(accounts);
  });
});

app.post("/createaccount", (req, res) => {
  const { name, email, password } = req.body;
  dal.signup(name, email, password, (account, err) => {
    if (err) {
      console.log(err);
      return res.status(400).send("could not create account");
    }
    res.send(account);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  dal.login(email, password, (account, err) => {
    if (err || account == null) {
      if (err) {
        console.log(err);
      }
      return res.status(400).send("could not login");
    }
    res.send(account);
  });
});

app.post("/deposit", (req, res) => {
  const { id, amount } = req.body;
  dal.deposit(id, amount, (updatedAccount, err) => {
    if (err || updatedAccount == null) {
      if (err) {
        console.log(err);
      }
      return res.status(400).send("could not deposit money");
    }
    res.send(updatedAccount);
  });
});

app.post("/withdraw", (req, res) => {
  const { id, amount } = req.body;
  dal.withdraw(id, amount, (updatedAccount, err) => {
    if (err || updatedAccount == null) {
      if (err) {
        console.log(err);
      }
      return res.status(400).send("could not withdraw money");
    }
    res.send(updatedAccount);
  });
});

app.get("/debug-get", (req, res) => {
  dal.allAccounts((accounts, err) => {
    if (err || accounts == null) {
      if (err) {
        console.log(err);
      }
      return res.status(400).send("could not fetch accounts");
    }
    res.send(accounts);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
