import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function AllData() {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/debug-get", { method: "GET" })
      .then((response) => response.text())
      .then((result) => setAllData(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Container>
      <h2>All Data</h2>
      <p>{allData}</p>
    </Container>
  );
}

export default AllData;
