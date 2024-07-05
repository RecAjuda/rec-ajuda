import { Route, Routes } from "react-router-dom";
import { FormLogin } from "./pages/login";
import { Map } from "./pages/map";
import { Shelter } from "./pages/shelter";
import { Header } from "./components/Header";

const URL_BASE = "/rec-ajuda-client";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={`${URL_BASE}/`} element={<Map />} />
        <Route path={`${URL_BASE}/map`} element={<Map />} />
        <Route path={`${URL_BASE}/login`} element={<FormLogin />} />
        <Route path={`${URL_BASE}/shelter`} element={<Shelter />} />
      </Routes>
    </>
  );
}
