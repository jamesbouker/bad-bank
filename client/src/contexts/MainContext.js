import { createContext, useContext, useState } from "react";

export const MainContext = createContext({
  signUpAccount: () => {},
  login: () => {},
  logout: () => {},
  name: "",
  setName: (name) => {},
  email: "",
  setEmail: (email) => {},
  password: "",
  setPassword: (password) => {},
  account: { name: "", email: "", id: "" },
  setAccount: (account) => {},
  deposit: (amount) => {},
  withdraw: (amount) => {},
});

export const MainContextProvider = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState(null);

  function deposit(amount) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: account.id,
      amount,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:5001/deposit", requestOptions)
      .then((response) => response.json())
      .then((result) => setAccount(result))
      .catch((error) => console.log("error", error));
  }

  function withdraw(amount) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: account.id,
      amount,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:5001/withdraw", requestOptions)
      .then((response) => response.json())
      .then((result) => setAccount(result))
      .catch((error) => console.log("error", error));
  }

  function logout() {
    setAccount(null);
    setName("");
    setEmail("");
    setPassword("");
  }

  function login(callback) {
    if (!(email.length > 0 && password.length > 0)) {
      // something is invalid!
      return callback(false);
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:5001/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAccount(result);
        callback(true);
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log("error", error));
  }

  function signUpAccount() {
    if (!(email.length > 0 && name.length > 0 && password.length > 0)) {
      // something is invalid!
      return false;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name,
      email,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:5001/createaccount", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setName("");
    setEmail("");
    setPassword("");
    return true;
  }

  return (
    <MainContext.Provider
      value={{
        deposit,
        withdraw,
        logout,
        name,
        email,
        password,
        signUpAccount,
        login,
        setName,
        setEmail,
        setPassword,
        account,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export function useMainContext() {
  return useContext(MainContext);
}
