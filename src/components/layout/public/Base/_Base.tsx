// Dependencies
import { Outlet } from "react-router-dom"

// UI Components
import { Header } from "../Header"

// Styles
import './Base.styles.css'

export const Base = () => (
  <>
    <Header />
    <main>    
      <Outlet />
    </main>
  </>
)