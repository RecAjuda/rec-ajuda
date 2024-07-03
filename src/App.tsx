import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { FormLogin } from "./pages/login";
import { Map } from "./pages/map";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}
