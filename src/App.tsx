import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import AOS from "aos";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return <AppRoutes />;
}

export default App;
