import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop, ScrollToTopIcon } from "./components";
import { Toaster } from "react-hot-toast";

function App(){
    return (
        <main className="">
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
            <ScrollToTop />
            <ScrollToTopIcon />
        </main>
    );
}

export default App;