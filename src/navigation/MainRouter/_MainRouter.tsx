// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Screens
import { Home } from "../../screens/Home";
import { Login } from "../../screens/Auth/Login";
import { Profile } from "../../screens/Profile";
import { Edit as EditProfile } from "../../screens/Profile/Edit";
import { List as Accounts } from "../../screens/Accounts/List";
import { Detail as AccountDetail } from "../../screens/Accounts/Detail";
import { New as NewAccount } from "../../screens/Accounts/New";

export const MainRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="login" Component={Login} />
            <Route>
                <Route path="profile" Component={Profile} />
                <Route path="profile/edit" Component={EditProfile} />
                <Route path="accounts" Component={Accounts} />
                <Route path="accounts/:account-id" Component={AccountDetail} />
                <Route path="accounts/new" Component={NewAccount} />
            </Route>
        </Routes>
    </BrowserRouter>
)