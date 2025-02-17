import { Route, Routes } from "react-router-dom";
import { FormLogin } from "./pages/login";
import { Map } from "./pages/map";
import { Shelter } from "./pages/shelter";
import { ShelterInfo } from "./pages/shelterInfo";
import { RiskPointMap } from "./pages/RiskPointMap";
import { Header } from "./components/Header";
import { Course } from "./pages/course";
import { Notification } from "./pages/notification";
import { Contact } from "./pages/contact";
import { StormInfo } from "./pages/course/page/StormInfo";

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
        <Route path={`${URL_BASE}/shelterInfo`} element={<ShelterInfo />} />
        <Route
          path={`${URL_BASE}/RiskPointMap`}
          element={<RiskPointMap></RiskPointMap>}
        />
        <Route path={`${URL_BASE}/course`} element={<Course />} />
        <Route path={`${URL_BASE}/contact`} element={<Contact />} />
        <Route path={`${URL_BASE}/notification`} element={<Notification />} />
        <Route path={`${URL_BASE}/storm`} element={<StormInfo />} />
      </Routes>
    </>
  );
}
