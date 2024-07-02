import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { FormLogin } from "./pages/login";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<FormLogin />} />
    </Routes>
  );
}
