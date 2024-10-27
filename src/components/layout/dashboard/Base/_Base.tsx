import { Outlet } from "react-router-dom"

export const Base = () => (
  <div>
    <h1>Dashboard</h1>
    <Outlet />
  </div>
)