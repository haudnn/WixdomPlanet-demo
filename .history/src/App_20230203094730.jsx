import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import RoutesConfig from "./config/RoutesConfig";
function App() {
  return (
    <div className="App bg-[#1c1c1e]">
      <BrowserRouter>
        <Header />
        <RoutesConfig/>
      </BrowserRouter>
    </div>
  );
}

export default App;
