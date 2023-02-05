import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
function App() {
  return (
    <div className="App bg-[#1c1c1e] h-full">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
