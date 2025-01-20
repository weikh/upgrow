import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[#f7f9fd] mx-auto min-h-screen">
      <Router>
        <RouterComponent />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
