import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, useLocation } from "react-router-dom";
import { useMainContext } from "../../contexts/MainContext";

function MyNav(props) {
  const location = useLocation();
  const activeRoute = location.pathname.replace("/", "");

  const { account } = useMainContext();
  const isLoggedIn = account != null;

  return (
    <div className="App" style={props.style}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <MyNavItem activeRoute={activeRoute} route="/" name="Bad-Bank" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn ? (
                <>
                  <MyNavItem
                    activeRoute={activeRoute}
                    route="logout"
                    name="Logout"
                  />
                  <MyNavItem
                    activeRoute={activeRoute}
                    route="withdraw"
                    name="Withdraw"
                  />
                  <MyNavItem
                    activeRoute={activeRoute}
                    route="deposit"
                    name="Deposit"
                  />
                  <MyNavItem
                    activeRoute={activeRoute}
                    route="balance"
                    name="Balance"
                  />
                </>
              ) : (
                <>
                  <MyNavItem
                    activeRoute={activeRoute}
                    route="createaccount"
                    name="Create Account"
                  />
                  <MyNavItem
                    activeRoute={activeRoute}
                    route="login"
                    name="Login"
                  />
                </>
              )}
              <MyNavItem activeRoute={activeRoute} route="debug" name="Debug" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

const MyNavItem = (props) => {
  return (
    <Nav.Item>
      <Nav.Link>
        <Link
          style={{
            textDecoration: "none",
            color: props.activeRoute === props.route ? "black" : "gray",
          }}
          to={props.route}
        >
          {props.name}
        </Link>
      </Nav.Link>
    </Nav.Item>
  );
};

export default MyNav;
