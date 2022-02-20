import Navi from "../navi/Navi";
import { Container, Row, Col } from "reactstrap";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  //path x exact component={y} -> path tam olarak x şeklinde gelirse y'yi aç demek
  //artık switch yok, routes kullanılıyor

  return (
    <div>
      <Container>
        <Navi />
        <Routes> 
          <Route path="/" element={<Dashboard />} />
          <Route path="product" element={<Dashboard />} />
          <Route path="cart" element={<CartDetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
