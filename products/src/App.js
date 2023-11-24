import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ProductsList from "./components/porductsList/productsList";
import SingleProducts from "./components/singleProducts/singleProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" Component={ProductsList} />
          <Route path="/product/:id" Component={SingleProducts} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
