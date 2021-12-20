import {Outlet, Link} from 'react-router-dom';
import './Layout.css'

const Layout = () => {
    return (
        <>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/calculator">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/addstring">Add Strings</Link>
                    </li>
                    <li>
                        <Link to="/gundam">Gundam</Link>
                    </li>
                    <li>
                        <Link to="/archangel">Archangel</Link>
                    </li>
                    <li>
                        <Link to="/football">Football</Link>
                    </li>
                    <li>
                        <Link to="/goal">Goal</Link>
                    </li>
                    <li>
                        <Link to="/fate">Fate</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />

            
        </>
    );
}

export default Layout;