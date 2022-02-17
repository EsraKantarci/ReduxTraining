import Navi from "../navi/Navi";
import {Container, Row, Col} from "reactstrap"; 
import Dashboard from "./Dashboard";

function App() {
  return <div>
    <Container>
      <Navi/>
    <Dashboard/>
    </Container>

  </div>;
}

export default App;
