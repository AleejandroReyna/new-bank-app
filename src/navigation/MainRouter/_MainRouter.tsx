// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import { Home } from "../../screens/Home";
import { Login } from "../../screens/Auth/Login";
import { Profile } from "../../screens/Profile";
import { Edit as EditProfile } from "../../screens/Profile/Edit";

export const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="login" Component={Login} />
            <Route>
                <Route path="profile" Component={Profile} />
                <Route path="profile/edit" Component={EditProfile} />
            </Route>
        </Routes>
    </BrowserRouter>
)