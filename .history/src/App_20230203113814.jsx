import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import RoutesConfig from "./config/RoutesConfig";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <div className="App bg-[#1c1c1e] min-h-screen">
      <BrowserRouter>
        <Header />
        <RoutesConfig/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
