import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import CrearCuenta from "../pages/auth/CrearCuenta";
import Layout from "../Layout";
import Dashboard from "../pages/Dashboard";
import DetalleCripto from "../pages/DetalleCripto";

const AppRouter = () => {
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
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/detalle-cripto"
            element={
              <Layout>
                <DetalleCripto />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
