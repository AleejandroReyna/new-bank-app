// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import { Home } from "../../screens/Home";
import { Login } from "../../screens/Auth/Login";

export const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
        </Routes>
    </BrowserRouter>
)