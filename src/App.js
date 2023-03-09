import { Toaster } from "react-hot-toast";
import "./App.css";
import AllRoutes from "./route/AllRoutes";

function App() {
  return (
    <div className="App">
      <Toaster />
      <AllRoutes />
    </div>
  );
}

export default App;
