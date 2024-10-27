// Dependencies
import { Outlet } from "react-router-dom"

// UI Components
import { Header } from "../Header"

export const Base = () => (
  <>
    <Header />
    <Outlet />
  </>
)