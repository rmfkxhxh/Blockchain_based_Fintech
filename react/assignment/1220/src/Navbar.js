import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Home from "./pages/Home";
import About from "./pages/About";
import Loginform from "./pages/Login";
import {Calc, Textaddition} from "./pages/Calc";
import {Gundam, Archangel, Football, Goal, Fate} from './pages/MyComponent';

export default function Navbar() {
    const characters = ["Siro", "Saver", "Archer", "Tosaka", "Lyn", "Verserker"]
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Loginform />} />
                    <Route path="calculator" element={<Calc />} />
                    <Route path="addstring" element={<Textaddition />} />
                    <Route path="gundam" element={<Gundam model="Router Gundam X10A"/>} />
                    <Route path="archangel" element={<Archangel />} />
                    <Route path="football" element={<Football />} />
                    <Route path="goal" element={<Goal isGoal={false}/>} />
                    <Route path="fate" element={<Fate characters={characters}/>} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}