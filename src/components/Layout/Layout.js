import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import WorkInProgress from "../WorkInProgress";

export default function Layout() {
    return (
        <div>
            <WorkInProgress />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}