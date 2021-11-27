import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import './styles/app.css';

const Login = lazy(() => import("./pages/login"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
