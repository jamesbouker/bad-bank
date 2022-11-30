import "./App.css";
import MyNav from "./components/MyNav/MyNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import AllData from "./components/AllData/AllData";
import CreateAccount from "./components/Account/CreateAccount";
import Balance from "./components/Money/Balance";
import Withdraw from "./components/Money/Withdraw";
import Deposit from "./components/Money/Deposit";
import Login from "./components/Account/Login";
import Logout from "./components/Account/Logout";

import { MainContextProvider } from "./contexts/MainContext";

function App() {
  return (
    <Router>
      <MainContextProvider>
        <MyNav style={{ marginBottom: "1rem" }} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debug" element={<AllData />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </MainContextProvider>
    </Router>
  );
}

export default App;
