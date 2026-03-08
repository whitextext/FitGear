import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/routes/AppRoutes";
import "@/styles/App.scss";

/**
 * The root component of the React application.
 * Wraps the routing logic in a BrowserRouter.
 */
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
