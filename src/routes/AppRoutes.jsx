import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import ReportIssue from "../Pages/ReportIssue"
import DashboardAdmin from "../Pages/DashboardAdmin"
import DashboardCitizen from "../Pages/DashboardCitizen"
import Header from "../Components/Header"

export default function AppRoutes() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/citizen" element={<DashboardCitizen />} />
      </Routes>
    </Router>
  )
}
