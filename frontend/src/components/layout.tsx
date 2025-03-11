import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />  {/* Aquí se renderizan las páginas */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
