import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { News } from "../Pages/News";
import { Profile } from "../Pages/Profile";

import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/details/:id" element={<Details />}/>

            <Route path="/SignIn" element={<SignIn />}/>
            <Route path="/register" element={<SignUp />}/>
        </Routes>
    )
}