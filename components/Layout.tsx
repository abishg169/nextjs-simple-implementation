import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

type Props = {
    children: ReactNode
}

const Layout = ({ children, ...props }: Props) => {
    return (
        <div className="content">
            <NavBar />
                <div className="app-body">
                    { children }
                </div>
            <Footer />
        </div>
    )
}

export default Layout;
