import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import CrearCuenta from "../pages/auth/CrearCuenta";
import Dashboard from "../pages/Dashboard";
import DetalleCripto from "../pages/DetalleCripto";

const AppRouter = () => {
  // const token = sessionStorage.getItem('token');
  // if (!token) {
  //   console.log('no hay token')
     
  //   return false;
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login />
            }
          />
          <Route
            path="/crear-cuenta"
            element={
              <CrearCuenta />
            }
          />
          <Route
            path="/dashboard"
            element={
                <Dashboard />
            }
          />
          <Route
            path="/detalle-cripto"
            element={
                <DetalleCripto />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
