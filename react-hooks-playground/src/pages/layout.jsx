import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/usestate">useState</Link>
                    </li>
                    <li>
                        <Link to="/useeffect">useEffect</Link>
                    </li>
                    <li>
                        <Link to="/usecontext">useContext</Link>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </>
    )
}
export default Layout