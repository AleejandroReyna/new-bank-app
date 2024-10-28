// Dependencies
import { Outlet } from "react-router-dom"

// UI Components
import { Header } from "../Header"
import { Footer } from "../Footer"

// Styles
import './Base.styles.css'

export const Base = () => (
  <div className="base-container">
    <Header />
    <main>    
      <Outlet />
    </main>
    <Footer />
  </div>
)