// App.tsx
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CounterPage from "./redux/CounterPage";
import store from "./redux/store"; // Import your Redux store

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your App with the Provider and pass the store */}
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/counter" element={<CounterPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
