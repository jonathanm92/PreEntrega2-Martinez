import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


function Layout(){
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <footer>pie de pag</footer>
        </div>
    )
}

export default Layout;