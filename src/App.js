import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Checkout from "./component/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Home />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
