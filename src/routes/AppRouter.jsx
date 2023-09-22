import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import CrearCuenta from "../pages/auth/CrearCuenta";
import Dashboard from "../pages/Dashboard";
import DetalleCripto from "../pages/DetalleCripto";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";
import useLocalStorage from "../hooks/useLocalStorage";
import RecuperarContrasena from "../pages/auth/RecuperarContrasena";
import Layout from "../Layout/Layout";
import CatalogoCripto from "../pages/CatalogoCripto";

const AppRouter = () => {
  const token = useLocalStorage('token', '')

  return (
    <>
      <Toaster duration="2000" position="top-center" reverseOrder={false} />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route
            path="/recuperar-contrasena"
            element={<RecuperarContrasena  />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAllowed={true} redirectPath={"/"}>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/detalle-cripto"
            element={
              <ProtectedRoute isAllowed={true} redirectPath={"/"}>
                <Layout>
                  <DetalleCripto />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalogo-cripto"
            element={
              <ProtectedRoute isAllowed={true} redirectPath={"/"}>
                <Layout>
                  <CatalogoCripto/>
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
