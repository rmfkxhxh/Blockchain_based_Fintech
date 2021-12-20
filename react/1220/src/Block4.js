import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Home from "./pages/Home";
import About from "./pages/About";

export default function Block4() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// export default function Block4() {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Layout />}>
//                         <Route path="" component={Home} />
//                         <Route path="/about" component={About} />
//                         {/* <Route path="blogs" component={Blogs} />
//                     <Route path="contact" component={Contact} />
//                     <Route path="*" component={Nopage} /> */}
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }